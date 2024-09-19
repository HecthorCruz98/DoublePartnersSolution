import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario.interface';
import { formatDate } from '@angular/common';

const uriWebService = '/CreateUsuario';

@Injectable({
    providedIn: 'root'
})
export class AddUsuarioService {

    Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }
    AddUsuario(): Observable<Usuario> {
        debugger
        this.Dataobjecs = JSON.parse(sessionStorage.getItem("AddUsuario") || '{}');

        let fecha = formatDate(new Date(), 'yyyy-MM-dd h:mm:ss', 'en-US')
        
        let body = {

            "nombreUsuario": this.Dataobjecs.nombreUsuario,
            "apellidousuario": this.Dataobjecs.apellidousuario,
            "loginUsuario": this.Dataobjecs.loginUsuario,
            "contrasenaUsuario": this.Dataobjecs.contrasenaUsuario,
            "idRol": this.Dataobjecs.idRol,
            "createDate": fecha,
            "createUser": "Sistema",

        }


        console.log(body)
        return this.http.post<Usuario>(uriWebService, body);
    }
}