import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class UserService {
    url: string = "http://localhost:4000/users";
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}
