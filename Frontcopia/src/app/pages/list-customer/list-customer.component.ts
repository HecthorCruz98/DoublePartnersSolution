import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import { ListCustomerService } from './Service/ListCustomer.service';
import Swal from 'sweetalert2';
import { DelCustomerService } from './Service/DelCustomer.service';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  objecs: ListCustomer[]=[{id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}]
  Dataobjecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}
  RegistrarResponse: {} = {};

  listarFormGroup: FormGroup;


  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder, private CustomerData : ListCustomerService, private DelCustomer : DelCustomerService) {
    this.listarFormGroup = this.formbuild.group({

    });

  }

  ngOnInit(): void {
    debugger
    this.initializeForm();
    this.CustomerData.GetCustomer().subscribe((result: any) => { this.objecs = result;  console.log(result) });

  }

  initializeForm(): void {
    this.listarFormGroup = this.formbuild.group({
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

  AddCustomers(){
    this.router.navigate(['/AddCustomer']);

  }
  UpCustomers(){
    this.router.navigate(['/UpCustomer']);
  }

  async DelCustomers(): Promise<void> {
    debugger
    this.objecs = this.listarFormGroup.getRawValue();
    sessionStorage.setItem("listCustomer", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("listCustomer") || '{}');
    let response;
     this.DelCustomer.DelCustomer(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("listCustomer") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Eliminado con Exito</i></label>',
        icon: 'success',
        iconColor: '#79cc86',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/ListCustomer']);
        }
      })

    } else {

      Swal.fire({
        title: '<label class="label-text"><i>Registro No Actualizado</i></label>',
        icon: 'warning',
        iconColor: '#f03838',
        text: 'Por favor verifica la informacion, e intente nuevamente',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          return
        }
      })

    }
    this.router.navigate(['/ListCustomer']);

  }
}
