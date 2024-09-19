import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.interface';
import { ListUsuarioService } from '../list-usuario/service/usuario.service';
import { UpUsuarioService } from './service/UpUsuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.scss']
})
export class UpdateUsuarioComponent implements OnInit {

  objecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  Patchobjecs: Usuario[]=[{id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}]
  RegistrarResponse: {} = {};
  upUsuarioFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private UpUsuario: UpUsuarioService,private ListUsuario: ListUsuarioService) {
    this.upUsuarioFormGroup = this.formbuild.group({

    });
   }

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm(): void {
    this.upUsuarioFormGroup = this.formbuild.group({
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
  private patch(): void {
    debugger
    this.Patchobjecs = JSON.parse(sessionStorage.getItem("response") || '{}');

    this.upUsuarioFormGroup.patchValue({
      
      id: this.Patchobjecs[0].id,
      nombreUsuario: this.Patchobjecs[0].nombreUsuario,
      apellidousuario: this.Patchobjecs[0].apellidousuario,
      loginUsuario: this.Patchobjecs[0].loginUsuario,
      idRol: this.Patchobjecs[0].idRol,
      contrasenaUsuario: this.Patchobjecs[0].contrasenaUsuario,
    })
  }
  Buscar(){
    debugger
    this.objecs = this.upUsuarioFormGroup.getRawValue();
    sessionStorage.setItem("UpUsuario", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpUsuario") || '{}');
    let response;
     this.ListUsuario.GetUsuario(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });
    this.patch();
  }
  async UpUsuarios(): Promise<void> {
    debugger
    this.objecs = this.upUsuarioFormGroup.getRawValue();
    sessionStorage.setItem("UpUsuario", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpUsuario") || '{}');
    let response;
     this.UpUsuario.UpUsuario().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("UpUsuario") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Actualizado Correctamente</i></label>',
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
        title: '<label class="label-text"><i>Registro No Actualizado</i></label>',
        icon: 'warning',
        iconColor: '#f03838',
        text: 'Por favor verifica la informacion, e intente nuevamente',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/UpUsuario']);
          return
        }
      })

    }

  }
}
