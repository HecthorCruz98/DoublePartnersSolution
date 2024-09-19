import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Tarea } from 'src/app/models/Tarea.interface';

const uriWebService = '/CreateTarea';

@Injectable({
    providedIn: 'root'
})
export class AddTareaService {

    Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }
    AddTarea(): Observable<Tarea> {
        debugger
        this.Dataobjecs = JSON.parse(sessionStorage.getItem("AddTarea") || '{}');

        let fecha = formatDate(new Date(), 'yyyy-MM-dd h:mm:ss', 'en-US')
        
        let body = {

            "descripcionTarea": this.Dataobjecs.descripcionTarea,
            "idEstado": this.Dataobjecs.idEstado,
            "idUsuario": this.Dataobjecs.idUsuario,
            "createDate": fecha,
            "createUser": "Sistema",

        }


        console.log(body)
        return this.http.post<Tarea>(uriWebService, body);
    }
}