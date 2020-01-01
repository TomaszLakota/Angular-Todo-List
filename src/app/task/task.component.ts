import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"]
})
export class TaskComponent {
    @Input() task = {};
    @Input() statuses = [];

    getStatus = (id, statuses = []) => {
        const status = statuses.find(status => {
            return status.id === id;
        });
        return (status && status.name) || "Unknown";
    };
}
