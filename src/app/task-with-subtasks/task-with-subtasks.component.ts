import { Component, Input } from "@angular/core";
import { Task } from "../models/task";
import { Status } from "../models/status";

@Component({
    selector: "app-task-with-subtasks",
    templateUrl: "./task-with-subtasks.component.html",
    styleUrls: ["./task-with-subtasks.component.scss"]
})
export class TaskWithSubtasksComponent {
    @Input() task: Task;
    @Input() statuses: Array<Status>;

    displaySubtasks = true;

    switchDisplay(event) {
        this.displaySubtasks = event;
    }
}
