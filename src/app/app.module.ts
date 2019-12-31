import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TaskWithSubtasksComponent } from './task-with-subtasks/task-with-subtasks.component';

@NgModule({
    declarations: [AppComponent, TodoListComponent, TaskWithSubtasksComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
