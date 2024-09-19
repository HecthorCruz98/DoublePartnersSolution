import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-angular';
import {NgModule} from '@angular/core';
import {APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import { environment } from 'src/environments/environment';


const uri= '/ReclamacionesMicroService';
//const uri = environment.apiReclamations + '/reclamacionesmicroservice';
const uriMenu= 'https://api-menu-sbx.thomasgreg.com/api/ManageMenu';

export function createApollo(httpLink:HttpLink): ApolloClientOptions<any>{
  return{
    link: httpLink.create({uri}),
    cache:new InMemoryCache
  }
}

export function createNamedApollo(httpLink:HttpLink) : Record<string, ApolloClientOptions<any>>{
  return{
    menu:{
      name: 'menu',
      link: httpLink.create({uri: uriMenu}),
      cache:new InMemoryCache
    }
   
  }
}


@NgModule({
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink] 
  },
  {
    provide: APOLLO_NAMED_OPTIONS,
    useFactory: createNamedApollo,
    deps: [HttpLink] 
  }
]
})
@Injectable({
  providedIn: 'root'
})
export class GraphQLModule {
 
}

