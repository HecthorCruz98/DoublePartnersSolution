import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario.interface';

const uriWebService = '/LoginUsuario';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {

    Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }
    AutenticacionUsuario(): Observable<Usuario> {
        debugger
        this.Dataobjecs = JSON.parse(sessionStorage.getItem("LoginUsuario") || '{}');
        
        let body = {

            "usuarioLogin": this.Dataobjecs.loginUsuario,
            "contrasena": this.Dataobjecs.contrasenaUsuario,

        }


        console.log(body)
        return this.http.post<Usuario>(uriWebService, body);
    }
}