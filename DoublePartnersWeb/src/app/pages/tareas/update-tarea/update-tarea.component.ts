import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/Tarea.interface';
import { UpTareaService } from './service/UpTarea.service';
import { ListTareaService } from '../list-tarea/services/ListTarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss']
})
export class UpdateTareaComponent implements OnInit {
  objecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}
  Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}
  Patchobjecs: Tarea[]=[{id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}]
  RegistrarResponse: {} = {};
  upTareaFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private UpTarea: UpTareaService,private ListTarea: ListTareaService) {
    this.upTareaFormGroup = this.formbuild.group({

    });
   }

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm(): void {
    this.upTareaFormGroup = this.formbuild.group({
      id: [''],
      descripcionTarea: [''],
      idEstado: [''],
      idUsuario: [''],
      createDate: [''],
      createUser: [''],
      modifyDate: [''],
      modifyUser: ['']
    })
  }
  Volver(){
    this.router.navigate(['/ListTarea']);

  }
  private patch(): void {
    debugger
    this.Patchobjecs = JSON.parse(sessionStorage.getItem("response") || '{}');

    this.upTareaFormGroup.patchValue({
      
      id: this.Patchobjecs[0].id,
      descripcionTarea: this.Patchobjecs[0].descripcionTarea,
      idEstado: this.Patchobjecs[0].idEstado,
      idUsuario: this.Patchobjecs[0].idUsuario,
    })
  }
  Buscar(){
    debugger
    this.objecs = this.upTareaFormGroup.getRawValue();
    sessionStorage.setItem("UpTarea", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpTarea") || '{}');
    let response;
     this.ListTarea.GetTarea(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });
    this.patch();
  }
  async UpTareas(): Promise<void> {
    debugger
    this.objecs = this.upTareaFormGroup.getRawValue();
    sessionStorage.setItem("UpTarea", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpTarea") || '{}');
    let response;
     this.UpTarea.UpTarea().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("UpTarea") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Actualizado Correctamente</i></label>',
        icon: 'success',
        iconColor: '#79cc86',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/ListTarea']);
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
          this.router.navigate(['/UpTarea']);
          return
        }
      })

    }

  }
}
