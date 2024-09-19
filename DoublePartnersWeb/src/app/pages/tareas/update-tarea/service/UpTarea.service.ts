import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Tarea } from 'src/app/models/Tarea.interface';

const uriWebService = '/UpdateTarea';

@Injectable({
    providedIn: 'root'
})
export class UpTareaService {

    Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }
    UpTarea(): Observable<Tarea> {
        debugger
        this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpTarea") || '{}');


        let fecha = formatDate(new Date(), 'yyyy-MM-dd h:mm:ss', 'en-US')
        
        let body = {

            "id": this.Dataobjecs.id,
            "descripcionTarea": this.Dataobjecs.descripcionTarea,
            "idEstado": this.Dataobjecs.idEstado,
            "idUsuario": this.Dataobjecs.idUsuario,
            "modifyDate": fecha,
            "modifyUser": "Sistema",

        }


        console.log(body)
        return this.http.put<Tarea>(uriWebService, body);
    }
}