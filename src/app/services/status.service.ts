import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class StatusService {
    url: string = "http://localhost:4000/statuses";
    constructor(private http: HttpClient) {}

    getStatuses(): Observable<any> {
        return this.http.get(`${this.url}`).pipe(
            catchError(err => {
                return throwError(err);
            })
        );
    }
}
