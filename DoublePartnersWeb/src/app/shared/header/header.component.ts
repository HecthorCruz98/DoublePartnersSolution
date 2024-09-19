import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Badge } from 'library-mti/lib/buttons/badge/badge.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem, MessageService } from 'primeng/api';
import { environment} from "../../../environments/environment";
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user: string ='';
  image: string='./assets/img/MTInegativoverde.png';
  menunuevo : any;

  notifications: Badge[] =[{
    title:'Nueva solicitud',
    url:'/prueba',
    content: 'Tiene una solicitudes de prestamo de documentos'
   }];

  menu: MenuItem[] =[];
  

  constructor( 
    private keycloakService: KeycloakService, 
    private menuService: MenuService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.user = this.keycloakService.getUsername();
    console.log(this.keycloakService.getToken());
    this.keycloakService.getToken().then((response) => {
      
      this.menuService.getMenu( response )
        .subscribe((Menu) =>{     
          this.menu= Menu;
          this.spinner.hide();
          sessionStorage.setItem("routes", JSON.stringify(this.menuService.routesAccess));
        },
        err => { 
          this.spinner.hide();
          this.messageService.add({severity:'error', summary: 'Error', detail: err});        
        },
      );      
    });   
     
    //console.log(this.keycloakService.getUserRoles());

  }

  closeSession() {
    this.keycloakService.logout();
  }

}
