import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import { HttpClient } from '@angular/common/http';

const uriWebService = '/DelCustomer';

@Injectable({
    providedIn: 'root'
})
export class DelCustomerService {

    Dataobjecs: ListCustomer={id: 0, nombre:'',apellido:'',direccion:'',telefono:'',identificacion:'',correo:'',estado:0}


    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.delete<any>(uriWebService);

    }

    DelCustomer(Id: number): Observable<ListCustomer> {

        debugger

        let body = {

            "id": Id
        }


        console.log(body)
        return this.http.post<ListCustomer>(uriWebService, body);
    }

}