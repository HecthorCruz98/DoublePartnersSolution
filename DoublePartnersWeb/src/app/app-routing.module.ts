
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './pages/usuarios/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './pages/usuarios/add-usuario/add-usuario.component';
import { UpdateUsuarioComponent } from './pages/usuarios/update-usuario/update-usuario.component';
import { ListTareaComponent } from './pages/tareas/list-tarea/list-tarea.component';
import { AddTareaComponent } from './pages/tareas/add-tarea/add-tarea.component';
import { UpdateTareaComponent } from './pages/tareas/update-tarea/update-tarea.component';
import { AutenticacionUsuariosComponent } from './pages/usuarios/autenticacion-usuarios/autenticacion-usuarios.component';


const routes: Routes = [
  { path: 'ListUsuario', component: ListUsuarioComponent, },
  { path: 'AddUsuario', component: AddUsuarioComponent, },
  { path: 'UpUsuario', component: UpdateUsuarioComponent, },

  { path: 'ListTarea', component: ListTareaComponent, },
  { path: 'AddTarea', component: AddTareaComponent, },
  { path: 'UpTarea', component: UpdateTareaComponent, },

  { path: 'Autenticacion', component: AutenticacionUsuariosComponent, },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 