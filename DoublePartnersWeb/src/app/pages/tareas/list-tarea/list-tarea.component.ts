import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/Tarea.interface';
import { ListTareaService } from './services/ListTarea.service';
import { DelTareaService } from './services/DelTarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.scss']
})
export class ListTareaComponent implements OnInit {

  objecs: Tarea[]=[{id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}]
  Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}
  RegistrarResponse: {} = {};

  listarTareaFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder, private TareaData : ListTareaService, private DelTarea : DelTareaService) {
    this.listarTareaFormGroup = this.formbuild.group({

    });

  }

  ngOnInit(): void {
    debugger
    this.initializeForm();
    this.TareaData.GetTareas().subscribe((result: any) => { this.objecs = result;  console.log(result) });
  }
  initializeForm(): void {
    this.listarTareaFormGroup = this.formbuild.group({
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
  AddTareas(){
    this.router.navigate(['/AddTarea']);

  }
  UpTareas(){
    this.router.navigate(['/UpTarea']);
  }
  async DelTareas(): Promise<void> {
    debugger
    this.objecs = this.listarTareaFormGroup.getRawValue();
    sessionStorage.setItem("listTarea", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("listTarea") || '{}');
    let response;
     this.DelTarea.DelTarea(this.Dataobjecs.id).subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("listTarea") || '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Eliminado con Exito</i></label>',
        icon: 'success',
        iconColor: '#79cc86',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/ListTarea']);
          window.location.reload();

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
    this.router.navigate(['/ListTarea']);

  }
}
