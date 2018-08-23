import { Component} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="box">
    <h2> Nested Component </h2>
      <ng-content select="[id='ibm']"></ng-content>
      <hr>
      <ng-content select="p"></ng-content>
      <hr>
      <ng-content select=":not(.box)"></ng-content>
    </div>
  `,
  styles: [`
  .box{
    border : 2px solid gray
  }
  `]
})
export class SecondComponent{

  constructor() { }

}
