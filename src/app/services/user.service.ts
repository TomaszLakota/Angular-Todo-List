import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class UserService {
    url: string = "http://localhost:4000/users";
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get(`${this.url}`).pipe(
            catchError(err => {
                return throwError(err);
            })
        );
    }
}
