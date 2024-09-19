import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const GET_CLIENTS : DocumentNode = gql`
query getMenuforUser($host: String!)
{
  realmHasClientTotalSearch(hostName:$host){
    state
    message
    error
    custom3{
      idRealmHasClient
      idClient
      idRealm
      hostName
      nameClient
      nameRealm
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  getrealmHasClient( host: string): Observable<Array <any>>{    

    return  this.apollo
      .watchQuery<any>(
        { query: GET_CLIENTS,
          variables: {
            host: host         
          }
        })
      .valueChanges.pipe(       
        map(({data }) => data.realmHasClientTotalSearch.custom3));
  
     
  }
}
