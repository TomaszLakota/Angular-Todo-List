import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TaskService {
    url: string = "http://localhost:4000/tasks";
    constructor(private http: HttpClient) {}

    getTasks(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}