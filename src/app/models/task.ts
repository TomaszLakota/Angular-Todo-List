export class Task {
    id: number;
    parentId: number;
    slug: string;
    statusId: number;
    tagsId: Array<number>;
    title: string;
    userId: number;
    subTasks?: Array<Task>;
}
