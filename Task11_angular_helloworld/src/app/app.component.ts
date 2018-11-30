import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Input name:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Hello world {{name}}!</h1>`,
    styles: [` 
                 h1{color:navy;}
                 :host {
                    font-family: Verdana;
                    color: #555;
                }
         `]
})
export class AppComponent { 
    name= '';
}
