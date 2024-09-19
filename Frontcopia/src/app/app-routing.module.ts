
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { UpCustomerComponent } from './pages/up-customer/up-customer.component';
import { ListUsuarioComponent } from './pages/usuarios/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './pages/usuarios/add-usuario/add-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'ListCustomer', component: ListCustomerComponent, },
  { path: 'AddCustomer', component: AddCustomerComponent, },
  { path: 'UpCustomer', component: UpCustomerComponent, },
  { path: 'ListUsuario', component: ListUsuarioComponent, },
  { path: 'AddUsuario', component: AddUsuarioComponent, }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 