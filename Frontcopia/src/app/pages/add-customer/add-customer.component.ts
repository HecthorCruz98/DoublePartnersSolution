import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import Swal from 'sweetalert2';
import { AddCustomerService } from './Service/AddCustomer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  objecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}
  Dataobjecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}
  RegistrarResponse: {} = {};
  addFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private AddCustomer: AddCustomerService) { 
    this.addFormGroup = this.formbuild.group({

    });
  }

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm(): void {
    this.addFormGroup = this.formbuild.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      telefono: [''],
      identificacion: [''],
      correo: [''],
      estado: ['']
    })
  }
  Volver(){
    this.router.navigate(['/ListCustomer']);

  }
  async AddCustomers(): Promise<void> {
    debugger
    this.objecs = this.addFormGroup.getRawValue();
    sessionStorage.setItem("AddCustomer", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("AddCustomer") ?? '{}');
    let response;
     this.AddCustomer.AddCustomer().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("AddCustomer") ?? '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Creado Correctamente</i></label>',
        icon: 'success',
        iconColor: '#79cc86',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/ListCustomer']);
          return
        }
      })
      return

    } else {

      Swal.fire({
        title: '<label class="label-text"><i>Registro No Creado</i></label>',
        icon: 'warning',
        iconColor: '#f03838',
        text: 'Por favor verifica la informacion, e intente nuevamente',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/AddCustomer']);
          return
        }
      })

    }

  }
}
