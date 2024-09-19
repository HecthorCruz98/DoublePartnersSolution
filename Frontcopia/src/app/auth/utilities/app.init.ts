import { KeycloakService } from "keycloak-angular";

import { environment} from "../../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService,) {

    var urlIngreso = location.host;
    var realm = '';
    var client = '';
    var url = '';


    environment.realms.forEach(element => {
        if (element.host == urlIngreso){
          realm = element.realm;
          sessionStorage.setItem("realm", realm);        
          client= element.clientId;
          sessionStorage.setItem("client", client);
          url= element.url ;
          sessionStorage.setItem("url", url);
        }
    });

    return () =>
      keycloak.init({
        config: {
          url:url,
          realm: realm,
          clientId: client,
        },
        bearerExcludedUrls: ['https://restcountries.eu/rest/v2/region', 'http://localhost:55981/api/NameMicroService'],
        initOptions: {
          
          //onLoad: 'login-required',
          checkLoginIframe: true,
          checkLoginIframeInterval: 25
        },
        loadUserProfileAtStartUp: true
      });
  }