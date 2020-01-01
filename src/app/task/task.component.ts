import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../models/task";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"]
})
export class TaskComponent {
    @Input() task: Task;
    @Input() statuses = [];
    @Input() isParent = false;
    @Output() hideSubtasks = new EventEmitter<boolean>();

    displaySubtasks = true;

    toggleDisplay() {
        this.displaySubtasks = !this.displaySubtasks;
        this.hideSubtasks.emit(this.displaySubtasks);
    }

    getStatus = (id, statuses = []) => {
        const status = statuses.find(status => {
            return status.id === id;
        });
        return (status && status.name) || "Unknown";
    };
}
