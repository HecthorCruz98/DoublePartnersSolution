import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent implements OnInit {
 
  constructor(private primengConfig: PrimeNGConfig){

  }

  title = 'initialProject';
  visibleSidebar1 : any;
  items: MenuItem[] = [];
  

  ngOnInit() {
    this.items = [
      {
        label: 'Diligenciar Formulario',
        icon: 'pi pi-fw pi-chevron-right',
      },
      {
        label: 'Cargar Documentos',
        icon: 'pi pi-fw pi-chevron-right',
        
      },
      {
        label: 'Iniciar Sesión',
        icon: 'pi pi-fw pi-chevron-right'
      }
    ];
  }
}



