import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { TaskService } from "../services/task.service";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
    @Input() tasks;
    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks.data || [];
            console.log(this.tasks);
        });
        console.log(this.tasks);
    }
}
