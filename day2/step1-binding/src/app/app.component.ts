import { Component } from '@angular/core';

@Component({
  selector: 'app-ibm',
  template : `
  <div class='box'>
    <h1>{{ title }}</h1>
    <h1>{{ title.toUpperCase() }}</h1>
    <h1 [innerHTML]='title.toUpperCase()'></h1>
    <input type="text" [value]='title'>
    <p [lang]='title'>I am here</p>
    <h1 bind-innerHTML='title.toUpperCase()'></h1>
    <app-second></app-second>
  </div>
  <hr>
  <button [disabled]='agree' >Click Me</button>
  <button disabled >Click Me</button>
  <img [src]="photo" alt="">
  <img bind-src="photo" alt="">
  <img src="{{photo}}" alt="">
  <button (click)="showAlert()">Show Alert</button>
  <button on-click="showAlert()">Show Alert</button>
  <input type="text" (keydown.space)="keyDownHandler()">
  <hr>
  <button (click)="clickHandler( $event )">First</button>
  <button (click)="clickHandler( $event )">Second</button>
  <button (click)="clickHandler( $event )">Third</button>
  `,
  styles : [`
    .box{
      border : 2px solid red;
    }
  `]
})
export class AppComponent {
  title = 'Welcome to your life, there is no turning back'
  agree = false;
  photo = 'assets/images/rajani.jpg';
  showAlert(){
    alert("Hello there")
  }
  keyDownHandler(){
    console.log("key down happened")
  }
  clickHandler(evt){
    alert("you clicked a button "+evt.target.innerHTML)
  }
}
