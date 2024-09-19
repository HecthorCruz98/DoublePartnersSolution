import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { MessageService } from 'primeng/api';
import { UsersExampleService } from '../services/users-example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
 
})
export class ExampleComponent implements OnInit {

  clients : any[]=[];
  show: boolean= true;
  typeIdentifications :any[]=[];
  token : string ='';

  constructor(
    private exampleService: UsersExampleService, 
    private keycloakService: KeycloakService,
    private messageService: MessageService
    
    ) { }  

  ngOnInit(): void {

  }
  
  loadTypeIdentification(){
    this.show=true;
    this.exampleService.
    getTypeIdentification()
    .subscribe(
      (typeIdentification) => this.typeIdentifications=typeIdentification,
      err => this.messageService.add({severity:'error', summary: 'Error', detail: err}),
      );
  }

  loadUserInfo(){
    this.show=false;
    this.keycloakService.getToken().then((response) => {
      this.token=response;
      this.exampleService
      .getUser(response)
      .subscribe((Client) => 
      this.clients=Client,
      err => this.messageService.add({severity:'error', summary: 'Error', detail: err}));
    });
  }

}
