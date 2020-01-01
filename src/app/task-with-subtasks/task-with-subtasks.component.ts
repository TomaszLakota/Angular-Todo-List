import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-task-with-subtasks",
    templateUrl: "./task-with-subtasks.component.html",
    styleUrls: ["./task-with-subtasks.component.scss"]
})
export class TaskWithSubtasksComponent implements OnInit {
    @Input() task;
    @Input() statuses;
    @Input() displaySubtasks = true;
    @Input() changeDisplay;

    display = true;

    ngOnInit() {}

    switchDisplay() {
        this.display = !this.display;
        //TODO: idk if this works as intended; probably not, coz there is already displaySubtasks
    }
}
