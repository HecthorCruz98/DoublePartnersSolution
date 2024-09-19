import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService,
   // private routerUrl: Router
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.

    
    if (!this.authenticated) {
      //console.log(this.router);
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    // Get the roles required from the route.
    let autorization = true;
    const requiredRoutes = route.data.routes;

    const retrievedObject = sessionStorage.getItem('routes');
    if(retrievedObject){
      const requiredRoles = JSON.parse(retrievedObject);
      
      if (!(requiredRoutes instanceof Array) || requiredRoutes.length === 0) {
       
        autorization = true;
      }
      else{

        requiredRoutes.forEach((element: string)  => {
          if(requiredRoles.includes( (element ) )){
            autorization = true;
          }
           
        });

      }

      
      
      //console.log(requiredRoles.includes( (route.data.ruotes ) ));
      
    }

    return autorization;

    // Allow the user to to proceed if no additional roles are required to access the route.
    

    // Allow the user to proceed if all the required roles are present.
    
  }
}