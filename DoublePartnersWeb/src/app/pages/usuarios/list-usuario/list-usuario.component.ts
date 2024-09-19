import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.interface';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUsuarioService } from './service/usuario.service';
import { DelUsuarioService } from './service/DelUsuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {

  objecs: Usuario[]=[{id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}]
  Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}
  RegistrarResponse: {} = {};

  listarFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder, private UsuarioData : ListUsuarioService,private DelUsuario : DelUsuarioService) {
    this.listarFormGroup = this.formbuild.group({

    });

  }

  ngOnInit(): void {
    this.initializeForm();
    this.UsuarioData.GetUsuarios().subscribe((result: any) => { this.objecs = result;  console.log(result) });
  }

  initializeForm(): void {
    this.listarFormGroup = this.formbuild.group({
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
  CrearUsuario(){
    this.router.navigate(['/AddUsuario']);

  }
  ActualizarUsuario(){
    this.router.navigate(['/UpUsuario']);

  }
  async DelUsuarios(): Promise<void> {
    debugger
    this.objecs = this.listarFormGroup.getRawValue();
    sessionStorage.setItem("listUsuario", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("listUsuario") || '{}');
    let response;
     this.DelUsuario.DelUsuario(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("listUsuario") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Eliminado con Exito</i></label>',
        icon: 'success',
        iconColor: '#79cc86',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/ListUsuario']);
        }
      })

    } else {

      Swal.fire({
        title: '<label class="label-text"><i>Registro No Eliminado</i></label>',
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
    this.router.navigate(['/ListUsuario']);

  }
}
