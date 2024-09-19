import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibreriaMtiModule } from 'library-mti';
import { KeycloakAngularModule } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ExamplesModule } from './examples/examples.module';
import { GraphQLModule } from './graphql.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { UpCustomerComponent } from './pages/up-customer/up-customer.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { UpUsuarioComponent } from './pages/usuarios/up-usuario/up-usuario.component';
import { ListUsuarioComponent } from './pages/usuarios/list-usuario/list-usuario.component';






@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    AddCustomerComponent,
    UpCustomerComponent,
    AddUsuarioComponent,
    UpUsuarioComponent,
    ListUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LibreriaMtiModule,
    HomeModule,
    ExamplesModule,
    KeycloakAngularModule,
    HttpClientModule,
    GraphQLModule,
    PrimeNgModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpLinkModule,
    ApolloModule,
    SlideMenuModule,
    ButtonModule,
    TieredMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MessageService

  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

 

  bootstrap: [AppComponent]
})
export class AppModule {

}
