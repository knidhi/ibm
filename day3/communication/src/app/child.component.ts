import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="box">
      <h1>{{ childProp }}</h1>
      <hr>
      <input type="text" #ti1>
      <button (click)="clickHandler(ti1.value)">Create Event</button>
    </div>
  `,
  styles: [`
    .box{
        border : 2px solid #333;
    }
  `]
})
export class ChildComponent{

 @Input('extname') childProp:any = "default value";
 @Output() compEvent:EventEmitter<any> = new EventEmitter();

 clickHandler(msg){
   this.compEvent.emit(msg);
 }

}
