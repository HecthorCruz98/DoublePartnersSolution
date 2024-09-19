import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [
   
  ]
})
export class AuthModule { }
