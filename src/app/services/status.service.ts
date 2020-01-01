import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class StatusService {
    url: string = "http://localhost:4000/statuses";
    constructor(private http: HttpClient) {}

    getStatuses(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}
