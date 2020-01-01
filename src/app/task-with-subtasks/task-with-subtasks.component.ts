import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../models/task";

@Component({
    selector: "app-task-with-subtasks",
    templateUrl: "./task-with-subtasks.component.html",
    styleUrls: ["./task-with-subtasks.component.scss"]
})
export class TaskWithSubtasksComponent implements OnInit {
    @Input() task: Task;
    @Input() statuses;

    displaySubtasks = true;

    ngOnInit() {}

    switchDisplay(event) {
        this.displaySubtasks = event;
    }
}
