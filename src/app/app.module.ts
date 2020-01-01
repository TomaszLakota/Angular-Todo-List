import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app/app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TaskWithSubtasksComponent } from "./components/task-with-subtasks/task-with-subtasks.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskComponent } from "./components/task/task.component";

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TaskWithSubtasksComponent,
        TaskComponent
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
