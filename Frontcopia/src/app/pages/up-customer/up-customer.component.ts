import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import Swal from 'sweetalert2';
import { UpCustomerService } from './Service/UpCustomer.service';
import { ListCustomerService } from '../list-customer/Service/ListCustomer.service';

@Component({
  selector: 'app-up-customer',
  templateUrl: './up-customer.component.html',
  styleUrls: ['./up-customer.component.scss']
})
export class UpCustomerComponent implements OnInit {

  objecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}
  Dataobjecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}
  Patchobjecs: ListCustomer[]=[{id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}]
  RegistrarResponse: {} = {};
  upFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private UpCustomer: UpCustomerService,private ListCustomer: ListCustomerService) {
    this.upFormGroup = this.formbuild.group({

    });
   }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
    this.upFormGroup = this.formbuild.group({
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
  private patch(): void {
    debugger
    this.Patchobjecs = JSON.parse(sessionStorage.getItem("response") || '{}');

    this.upFormGroup.patchValue({
      
      id: this.Patchobjecs[0].id,
      nombre: this.Patchobjecs[0].nombre,
      apellido: this.Patchobjecs[0].apellido,
      correo: this.Patchobjecs[0].correo,
      estado: this.Patchobjecs[0].estado,
      direccion: this.Patchobjecs[0].direccion,
      telefono: this.Patchobjecs[0].telefono,
      identificacion: this.Patchobjecs[0].identificacion
    })
  }
  Buscar(){
    debugger
    this.objecs = this.upFormGroup.getRawValue();
    sessionStorage.setItem("UpCustomer", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpCustomer") || '{}');
    let response;
     this.ListCustomer.GetCustomers(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });
    this.patch();
  }
  async UpCustomers(): Promise<void> {
    debugger
    this.objecs = this.upFormGroup.getRawValue();
    sessionStorage.setItem("UpCustomer", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpCustomer") || '{}');
    let response;
     this.UpCustomer.UpCustomer().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("UpCustomer") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Actualizado Correctamente</i></label>',
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
        title: '<label class="label-text"><i>Registro No Actualizado</i></label>',
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
