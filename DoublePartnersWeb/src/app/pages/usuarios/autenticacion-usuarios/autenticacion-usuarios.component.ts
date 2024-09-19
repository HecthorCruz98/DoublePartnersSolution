import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.interface';
import Swal from 'sweetalert2';
import { AutenticacionService } from './service/Autenticacion.service';

@Component({
  selector: 'app-autenticacion-usuarios',
  templateUrl: './autenticacion-usuarios.component.html',
  styleUrls: ['./autenticacion-usuarios.component.scss']
})
export class AutenticacionUsuariosComponent implements OnInit {

  objecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  RegistrarResponse: {} = {};
  loginFormGroup: FormGroup;

    constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private Autenticacion: AutenticacionService) { 
    this.loginFormGroup = this.formbuild.group({

    });
  }

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm(): void {
    this.loginFormGroup = this.formbuild.group({
      loginUsuario: [''],
      contrasenaUsuario: [''],
    })
  }
  async AutenticacionUsuarios(): Promise<void> {
    debugger
    this.objecs = this.loginFormGroup.getRawValue();
    sessionStorage.setItem("LoginUsuario", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("LoginUsuario") ?? '{}');
    let response;
     this.Autenticacion.AutenticacionUsuario().subscribe((result: any) => { this.objecs = result;  console.log(result) });

    this.RegistrarResponse = sessionStorage.getItem("response") ?? '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Iniciando Sesion...</i></label>',
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
        title: '<label class="label-text"><i>Datos Incorrectos</i></label>',
        icon: 'warning',
        iconColor: '#f03838',
        text: 'Por favor verifica la informacion, e intente nuevamente',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/Autenticacion']);
          return
        }
      })

    }

  }

}
