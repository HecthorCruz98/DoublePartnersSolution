import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { BasicosComponent } from './basicos/basicos.component';
import { ExampleComponent } from './example/example.component';



const routes: Routes = [

  {
    path:'',
    children :[
      {
        path:'services', 
        component: ExampleComponent,
        canActivate : [AuthGuard],
        data: {routes: ['examples/services']}
      },
      { path:'forms', 
        canActivate : [AuthGuard],
        component: BasicosComponent,
        data: {routes: ['examples/forms']}
      },
      { path:'**', 
        redirectTo: 'services'
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class ExampleRoutingModule { }
