import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCustomer } from 'src/app/models/ListCustomer.interface';
import { HttpClient } from '@angular/common/http';

const uriWebService = '/GetCustomer';

@Injectable({
    providedIn: 'root'
})
export class ListCustomerService {

    constructor(private http: HttpClient) {
        this.load();
    }
    load() {

        console.log(uriWebService);
        return this.http.get<any>(uriWebService);

    }

    GetCustomer(): Observable<ListCustomer> {
        debugger
        return this.http.get<ListCustomer>(uriWebService);
    }
    GetCustomers(id : number): Observable<ListCustomer> {
        debugger
        return this.http.get<ListCustomer>(uriWebService + '?id=' + id);
    }
}