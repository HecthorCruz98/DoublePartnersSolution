import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicosComponent } from './basicos/basicos.component';
import { ExampleRoutingModule } from './example-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ExampleComponent,
    BasicosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    ExampleRoutingModule
  ],
  exports: [
    ExampleComponent
  ]
})
export class ExamplesModule { }
