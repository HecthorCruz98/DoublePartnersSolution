import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {
 
  mensaje : string = '';

  myForm:FormGroup = this.formBuilder.group({
    nombre     : [, [Validators.required,Validators.minLength(3)]] ,
    precio     : [, [Validators.min(0), Validators.required]],
    existencia : [, [Validators.min(0), Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.myForm.setValue({
      nombre :'RTX',
      precio : 0,
      existencia: 0

    })
  }

  getError(campo : string) {
    return this.myForm.controls[campo].errors && 
    this.myForm.controls[campo].touched;
  }

  guardar(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return ;
    }
    this.myForm.reset();
    this.mensaje= 'Error al guardar';
  }

  

}
