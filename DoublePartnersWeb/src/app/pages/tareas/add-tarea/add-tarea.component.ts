import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTareaService } from './service/AddTarea.service';
import { Tarea } from 'src/app/models/Tarea.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.scss']
})
export class AddTareaComponent implements OnInit {

  objecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}
  Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}
  RegistrarResponse: {} = {};
  addTareaFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private readonly router: Router, private readonly formbuild: FormBuilder,private AddTarea: AddTareaService) { 
    this.addTareaFormGroup = this.formbuild.group({

    });
  }

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm(): void {
    this.addTareaFormGroup = this.formbuild.group({
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
  async AddTareas(): Promise<void> {
    debugger
    this.objecs = this.addTareaFormGroup.getRawValue();
    sessionStorage.setItem("AddTarea", JSON.stringify(this.objecs));
    this.Dataobjecs = JSON.parse(sessionStorage.getItem("AddTarea") ?? '{}');
    let response;
     this.AddTarea.AddTarea().subscribe((result: any) => {this.objecs = result; response = result;sessionStorage.setItem("response", JSON.stringify(response));
    });

    this.RegistrarResponse = sessionStorage.getItem("AddTarea") ?? '{}';

    if (this.RegistrarResponse != null) {
      Swal.fire({
        title: '<label class="label-text"><i>Registro Creado Correctamente</i></label>',
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
        title: '<label class="label-text"><i>Registro No Creado</i></label>',
        icon: 'warning',
        iconColor: '#f03838',
        text: 'Por favor verifica la informacion, e intente nuevamente',
        confirmButtonColor: '#7DA244',
        confirmButtonText: 'Aceptar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/AddTarea']);
          return
        }
      })

    }

  }
}
