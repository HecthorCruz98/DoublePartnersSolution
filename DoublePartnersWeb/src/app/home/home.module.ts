import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


import { PorPaisComponent } from './components/por-pais/por-pais.component';
import { FormsModule } from '@angular/forms';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { InputTextModule } from 'primeng/inputtext';





@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    PorPaisComponent,
    PaisInputComponent,
    PaisTablaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    InputTextModule
   
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class HomeModule { }
