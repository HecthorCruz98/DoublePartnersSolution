import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from 'src/app/models/Tarea.interface';

const uriWebService = '/GetTarea';

@Injectable({
    providedIn: 'root'
})
export class ListTareaService {

    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }

    GetTareas(): Observable<Tarea> {
        debugger
        return this.http.get<Tarea>(uriWebService);
    }
    GetTarea(id : number): Observable<Tarea> {
        debugger
        return this.http.get<Tarea>(uriWebService + '?id=' + id);
    }
}