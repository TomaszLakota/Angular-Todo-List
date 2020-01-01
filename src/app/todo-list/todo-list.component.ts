import { Component, OnInit, OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { TaskService } from "../services/task.service";
import { UserService } from "../services/user.service";
import { StatusService } from "../services/status.service";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
    tasks = [];
    users = [];
    statuses = [];
    status = {
        gotTasks: false,
        gotUsers: false
    };

    constructor(
        private taskService: TaskService,
        private userService: UserService,
        private statusService: StatusService
    ) {}

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks.data || [];
            this.status.gotTasks = true;
            this.fetchCallback();
        });

        this.userService.getUsers().subscribe(users => {
            this.users = users.data || [];
            this.status.gotUsers = true;
            this.fetchCallback();
        });

        this.statusService.getStatuses().subscribe(statuses => {
            this.statuses = statuses.data || [];
        });
    }

    fetchCallback() {
        if (this.status.gotTasks && this.status.gotUsers) {
            let tasks = this.addUsernamesToTasks(this.tasks, this.users);
            this.tasks = this.addHierarchyToTasks(tasks);
            console.log(this.tasks);
        }
    }

    addUsernamesToTasks(tasks, users) {
        if (!tasks) {
            return [];
        }
        if (!users) {
            return tasks;
        }
        const updatedTasks = tasks.map(task => {
            const user = users.find(user => {
                return user.id === task.userId;
            });
            task.author = user.fullName;
            return task;
        });
        return updatedTasks;
    }

    addHierarchyToTasks(tasks) {
        if (!tasks) {
            return [];
        }
        let parents = tasks.filter(task => {
            return !task.parentId;
        });
        const subTasks = tasks.filter(task => {
            return !!task.parentId;
        });
        parents.forEach(task => (task.subTasks = []));

        parents = parents.map(parent => {
            subTasks.forEach((subtask, i) => {
                if (subtask.parentId === parent.id) {
                    parent.subTasks.push(subtask);
                    subTasks.splice(i, 1);
                }
            });

            return parent;
        });

        parents = parents.map(parent => {
            parent.subTasks = parent.subTasks.map(
                parent => (parent = { ...parent, subTasks: [] })
            );
            parent.subTasks = parent.subTasks.map(parent => {
                for (let i = 0; i < subTasks.length; i++) {
                    let subtask = subTasks[i];
                    if (subtask.parentId === parent.id) {
                        parent.subTasks.push(subtask);
                        subTasks.splice(i--, 1);
                    }
                }
                return parent;
            });

            return parent;
        });
        return parents;
    }
}
