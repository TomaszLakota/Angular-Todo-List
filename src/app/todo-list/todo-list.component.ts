import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
    @Input() tasks;
    constructor() {}

    ngOnInit() {
        console.log("tasks");
    }
}
