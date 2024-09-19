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
import { ListUsuarioComponent } from './pages/usuarios/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './pages/usuarios/add-usuario/add-usuario.component';
import { UpdateUsuarioComponent } from './pages/usuarios/update-usuario/update-usuario.component';
import { ListTareaComponent } from './pages/tareas/list-tarea/list-tarea.component';
import { AddTareaComponent } from './pages/tareas/add-tarea/add-tarea.component';
import { UpdateTareaComponent } from './pages/tareas/update-tarea/update-tarea.component';
import { AutenticacionUsuariosComponent } from './pages/usuarios/autenticacion-usuarios/autenticacion-usuarios.component';







@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    UpdateUsuarioComponent,
    ListTareaComponent,
    AddTareaComponent,
    UpdateTareaComponent,
    AutenticacionUsuariosComponent,
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
