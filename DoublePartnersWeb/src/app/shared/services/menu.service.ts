import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { KeycloakService } from 'keycloak-angular';

const GET_MENU : DocumentNode = gql`
query getMenuforUser($realm: String!, $client: String!)
{
  menuItemsTotalSearch(
    nameRol:"CLAIMANT",
    nameRealm: $realm ,
    nameClient: $client ){
    state
    message
    error
    custom2{
      menuItems{
        nameMenu      
        iconMenu
        route      
        menuOptions{
          nameMenu    
          iconMenu
          route     
          menuOptions{    
            nameMenu      
            iconMenu
            route           
            menuOptions{ 
              nameMenu  
              iconMenu
              route    
            }
          }
        }
      }
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  auxSubMenu : any = [{}];
  auxMenu : any = [{}];
  routesAccess : string[]=[];

  constructor(private apollo: Apollo, private keycloakService: KeycloakService ) { }

  getMenu(token: string): Observable<Array <any>> {
   
    return  this.apollo.use('menu')
        .watchQuery<any>(
          { query: GET_MENU,
            variables: {
              realm:  sessionStorage.getItem('realm')  , 
              client: sessionStorage.getItem('client')             
            },
            context: {
              headers: { 
                'jwt':   token,
                'realm': sessionStorage.getItem("realm") 
              }       
            }
          })
        .valueChanges.pipe(         
          map(  
              ({data}) => 
              this.transformMenu(data.menuItemsTotalSearch.custom2.menuItems),            
            
              ),
            
        );
  }

  transformMenu( menu: any){  

    var newMenu : MenuItem[] = [{}];
    var id :number =0;

    menu.forEach((obj: any ) => {
   
      for (const k in obj) {
          this.renameItems(k , obj , this.auxMenu, id);
          
          if( k == 'menuOptions')
          {
            if ( Object.keys(obj[k]).length>0){
              this.submenu(obj[k], 0)
            }    
          }
      }        
      newMenu.push({...this.auxMenu[id]});
    })
    var closeSession = {
      'label': 'Cerrar sesión',
      'icon': 'pi pi-sign-out',
      'command': (event: Event) => { this.keycloakService.logout();}
    };
  
    newMenu.shift();
    
    newMenu.push(closeSession)

    return newMenu;
  }

  renameItems(key : string , object : any, tempObject:any, id:number){
      if(key == 'nameMenu')
      {
        tempObject[id]['label'] = object[key];
      }
      if(key == 'iconMenu')
      {
        if(object['iconMenu'] !== 'n/a')
        tempObject[id]['icon'] = object[key];
      }
      if(key == 'route')
      {
        if(object['route'] !== null)
        {
          if(object[key].match(/https?:\/\/(www\.)?/))
          {
            tempObject[id]['url'] = object[key];
            tempObject[id]['target'] = '_blank';
          }
          else
          {
            this.routesAccess.push(object[key]);
            tempObject[id]['routerLink'] = object[key];           
          }
        }
      }      
  }

  submenu(obj :any, numSubMenu:number ){

    this.auxSubMenu[numSubMenu]=[{}];      
    if (numSubMenu > 0)
    {
        this.auxMenu[numSubMenu]  = [{}];
        this.auxMenu[numSubMenu]['items']  = [{}];
    } 
    else 
    {
        this.auxMenu[numSubMenu]['items']  = [{}];
    }      
    var aux :number =0;
    
      obj.forEach((object: any ) => {
        this.auxSubMenu[numSubMenu][aux]=[{}];
       
        for (const key in object) { 

           this.renameItems(key , object , {...this.auxSubMenu[numSubMenu]} ,aux);
         
           if( key == 'menuOptions'){

            if ( Object.keys(object[key]).length>0){

               var itTemp=numSubMenu +1 ;
               this.submenu(object[key], itTemp );
           
               this.auxSubMenu[numSubMenu][aux]['items']=[{...this.auxMenu[itTemp]['items'][0] }]
               this.auxSubMenu[numSubMenu][aux]['items']=this.clean( this.auxSubMenu[numSubMenu][aux]['items']);
              
            }            
           }       
        }   
     
        this.auxMenu[numSubMenu]['items'].push({...this.auxSubMenu[numSubMenu][aux] });
        this.auxMenu[numSubMenu]['items']=this.clean( this.auxMenu[numSubMenu]['items']);      
      
        aux ++  ;
    });

  }

  clean(obj: any) {
    obj.forEach((object: any ) => {
     if (Object.keys(object).length === 0 ) {
        
      for (const key in obj) {
        obj.splice(0,1);
      }}
    });

    return obj
  }
}
