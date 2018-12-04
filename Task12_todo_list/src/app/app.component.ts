import { Component } from '@angular/core';
     
@Component({
    selector: 'todo-list',
    template: `
                <label>Input task:</label>
                <input [(ngModel)]="name" placeholder="name">
                <button (click)="addTask(name)">Add</button>
                <button (click)="removeLastTask()">Remove</button>
                <button (click)="clearList()">Clear</button>
                <ul>
                    <li *ngFor="let task of tasksArray">
                        {{task}}
                    </li>
                </ul>
                 `
})
export class AppComponent { 
    name: string = '';
    tasksArray: string[] = [
        'Task#1',
        'Task#2',
        'Task#3'
    ]

    /**
     * addTask
     */
    public addTask(input: string) {
        this.tasksArray.unshift(input);
    }
    public removeLastTask() {
        this.tasksArray.shift();
    }
    /**
     * clearList
     */
    public clearList() {
        this.tasksArray.splice(0);
    }
}
