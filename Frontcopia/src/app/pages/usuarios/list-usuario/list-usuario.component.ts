import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.interface';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUsuarioService } from './Service/ListUsuario.service';


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

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder, private UsuarioData : ListUsuarioService) {
    this.listarFormGroup = this.formbuild.group({

    });

  }

  ngOnInit(): void {
    debugger
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

}
