import { Component } from '@angular/core';
/*
<app-second>
      <li class="list"> List Item 1</li>
      <li> List Item 2</li>
      <li id="ibm"> List Item 3 ID IBM</li>
      <li class="list"> List Item 4</li>
      <li class="list"> List Item 5</li>
      <li class="box"> List Item Box </li>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum rerum, blanditiis eaque numquam nesciunt. Tempore corporis eos aperiam architecto explicabo distinctio porro quas voluptas perferendis blanditiis cupiditate iure, quibusdam autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum rerum, blanditiis eaque numquam nesciunt. Tempore corporis eos aperiam architecto explicabo distinctio porro quas voluptas perferendis blanditiis cupiditate iure, quibusdam autem.
      </p>
    </app-second>
*/
@Component({
  selector: 'app-root',
  template:`
    <h1>Component Communication</h1>
    <h2>{{ message }}</h2>
    <hr>
    <input type="range" [(ngModel)]="power">
    <app-child [extname]="power" (compEvent)="compEventListener($event)"></app-child>
  `
})
export class AppComponent {
  power = 0;
  message = "";
  compEventListener(evt){
    this.message = evt;
  }
}
