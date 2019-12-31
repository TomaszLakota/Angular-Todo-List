import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-task-with-subtasks",
    templateUrl: "./task-with-subtasks.component.html",
    styleUrls: ["./task-with-subtasks.component.scss"]
})
export class TaskWithSubtasksComponent implements OnInit {
    @Input() title;
    @Input() author;
    @Input() statusId;
    @Input() id;
    @Input() subTasks;
    @Input() statuses;

    ngOnInit() {}
}
