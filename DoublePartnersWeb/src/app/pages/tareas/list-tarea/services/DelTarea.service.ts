import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from 'src/app/models/Tarea.interface';

const uriWebService = '/DeleteTarea';

@Injectable({
    providedIn: 'root'
})
export class DelTareaService {

    Dataobjecs: Tarea={id: 0, descripcionTarea:'',idEstado: 0,idUsuario: 0, createDate:'',createUser:'',modifyDate:'',modifyUser:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.delete<any>(uriWebService);

    }

    DelTarea(Id: number): Observable<Tarea> {

        debugger

        let body = {

            "id": Id
        }


        console.log(body)
        return this.http.post<Tarea>(uriWebService, body);
    }

}