import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import { HttpClient } from '@angular/common/http';

const uriWebService = '/UpdateCustomer';

@Injectable({
    providedIn: 'root'
})
export class UpCustomerService {

    Dataobjecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }
    UpCustomer(): Observable<ListCustomer> {
        debugger
        this.Dataobjecs = JSON.parse(sessionStorage.getItem("UpCustomer") || '{}');


        let body = {

            "id": this.Dataobjecs.id,
            "nombre": this.Dataobjecs.nombre,
            "apellido": this.Dataobjecs.apellido,
            "telefono": ''+this.Dataobjecs.telefono+'',
            "identificacion": ''+this.Dataobjecs.identificacion+'',
            "correo": this.Dataobjecs.correo,
            "direccion": this.Dataobjecs.direccion,
            "estado": true,

        }


        console.log(body)
        return this.http.put<ListCustomer>(uriWebService, body);
    }
}