import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LibreriaMtiModule } from 'library-mti';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LibreriaMtiModule
  ],
  exports:[
    HeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }
