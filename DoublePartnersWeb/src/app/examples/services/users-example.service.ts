import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_FEED : DocumentNode = gql`
{
  documentsTypeAPI
  {
    state
    error
    message
    custom
          {
            Identifier
            name
          }
  }
}`;

const GET_USER : DocumentNode = gql`
{
  userInfos
  {
    state
    error
    message
    custom
    {
      Identifier
      firstName
      lastName
      genero
      documentNumber
      documentTypeId
    }
  }
}`;
  
@Injectable({
  providedIn: 'root'
})
export class UsersExampleService {

  token : string ='';
  constructor(private apollo: Apollo ) { 
    
  }

  

  getTypeIdentification(): Observable<Array <any>>{    

    return  this.apollo
      .watchQuery<any>({query: GET_FEED})
      .valueChanges.pipe(
       
        map((result) => result.data.documentsTypeAPI.custom));
  
     
  }

 getUser(token: string): Observable<Array <any>> {
     
  return  this.apollo
      .watchQuery<any>(
        { query: GET_USER,
          context: {
            headers: { 'jwt':   token,
             'realm': sessionStorage.getItem("realm") }
     
          }
        })
      .valueChanges.pipe(
       
        map((result) => result.data.userInfos.custom));
  }
     
  
}
