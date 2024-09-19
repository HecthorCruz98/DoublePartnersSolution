import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PerfilComponent } from "./pages/perfil/perfil.component";


const routes: Routes =[
  {
    path:'',
    children: 
    [
      {
        path: 'perfil',
        component: PerfilComponent
      },      
      {
        path: "**",
        redirectTo: 'perfil'
      }

    ]
  }
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild( routes )
    ],
    exports: [
      RouterModule
    ]
  })
export class AuthRoutingModule { }