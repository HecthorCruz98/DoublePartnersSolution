import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario.interface';

const uriWebService = '/DeleteUsuario';

@Injectable({
    providedIn: 'root'
})
export class DelUsuarioService {

    Dataobjecs: Usuario={id: 0, nombreUsuario:'',apellidousuario:'',loginUsuario:'',contrasenaUsuario:'',idRol: 0,createDate:'',createUser:'',modifyDate:'',modifyUser:'', token:''}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.delete<any>(uriWebService);

    }

    DelUsuario(Id: number): Observable<Usuario> {

        debugger

        let body = {

            "id": Id
        }


        console.log(body)
        return this.http.post<Usuario>(uriWebService, body);
    }

}