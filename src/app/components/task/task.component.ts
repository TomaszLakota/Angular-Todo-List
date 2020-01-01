import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../models/task";
import { Status } from "../../models/status";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"]
})
export class TaskComponent {
    @Input() task: Task;
    @Input() statuses: Array<Status> = [];
    @Input() isParent = false;
    @Output() hideSubtasks = new EventEmitter<boolean>();

    display = true;

    toggleDisplay() {
        this.display = !this.display;
        this.hideSubtasks.emit(this.display);
    }

    getStatus = (id, statuses = []) => {
        const status = statuses.find(status => {
            return status.id === id;
        });
        return (status && status.name) || "Unknown";
    };
}
