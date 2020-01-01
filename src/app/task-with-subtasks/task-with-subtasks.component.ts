import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-task-with-subtasks",
    templateUrl: "./task-with-subtasks.component.html",
    styleUrls: ["./task-with-subtasks.component.scss"]
})
export class TaskWithSubtasksComponent implements OnInit {
    @Input() task;
    @Input() statuses;

    displaySubtasks = true;

    ngOnInit() {}

    switchDisplay(event) {
        this.displaySubtasks = event;
    }
}
