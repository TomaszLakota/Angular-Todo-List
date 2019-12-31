import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    tasks = [
        {
            title: "task.title",
            author: "task.author",
            statusId: "task.statusId",
            id: "task.id",
            subTasks: "task.subTasks",
            statuses: "this.state.statuses"
        }
    ];

    ngOnInit() {}
}
