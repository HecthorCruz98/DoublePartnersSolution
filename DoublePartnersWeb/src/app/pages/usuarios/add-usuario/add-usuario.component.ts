import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.interface';
import Swal from 'sweetalert2';
import { AddUsuarioService } from './service/AddUsuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  objecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  RegistrarResponse: {} = {};
  addUsuarioFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private AddUsuario: AddUsuarioService) { 
    this.addUsuarioFormGroup = this.formbuild.group({

    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.addUsuarioFormGroup = this.formbuild.group({
      id: [''],
      nombreUsuario: [''],
      apellidousuario: [''],
      idRol: [''],
      loginUsuario: [''],
      contrasenaUsuario: [''],
      token: [''],
      createDate: [''],
      createUser: [''],
      modifyDate: [''],
      modifyUser: ['']
    })
  }
  Volver(){
    this.router.navigate(['/ListUsuario']);

  }
  async AddUsuarios(): Promise<void> {
    debugger
    this.objecs = this.addUsuarioFormGroup.getRawValue();
    sessionStorage.setItem("AddUsuario", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("AddUsuario") ?? '{}');
    let response;
     this.AddUsuario.AddUsuario().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
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
          this.router.navigate(['/ListUsuario']);
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
          this.router.navigate(['/AddUsuario']);
          return
        }
      })

    }

  }
}
