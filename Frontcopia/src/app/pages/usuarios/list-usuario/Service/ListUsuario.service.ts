import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.interface';
import { HttpClient } from '@angular/common/http';

const uriWebService = '/GetUsuario';

@Injectable({
    providedIn: 'root'
})
export class ListUsuarioService {

    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }

    GetUsuarios(): Observable<Usuario> {
        debugger
        return this.http.get<Usuario>(uriWebService);
    }
    GetUsuario(Id : number): Observable<Usuario> {
        debugger
        return this.http.get<Usuario>(uriWebService + '?Id=' + Id);
    }
}