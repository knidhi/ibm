import { Component } from "@angular/core";
/*
    <h1 class="boxer" [class.box]="agreed">Heading 1</h1>
    <h2 class="boxer" [class.box]="agreed">Heading 2</h2>
    <h3 class="boxer" [class.box]="agreed">Heading 3</h3>
    <h4 class="boxer" [class.box]="agreed">Heading 4</h4>
    <h5 class="boxer" [class.box]="agreed">Heading 5</h5>
*/
@Component({
    selector : 'app-second',
    template : `
    <h1 [ngClass]="{box : agreed === true, boxer: rating > 5}">Heading 1</h1>
    <h2 [ngClass]="{box : agreed === true, boxer: rating > 5}">Heading 2</h2>
    <h3 [ngClass]="{box : agreed === true, boxer: rating > 5}">Heading 3</h3>
    <h4 [ngClass]="{box : agreed === true, boxer: rating > 5}">Heading 4</h4>
    <h5 [ngClass]="{box : agreed === true, boxer: rating > 5}">Heading 5</h5>
    <input #ti1 type="text">
    <button (click)="clickHandler(ti1.value)">submit</button>
    <hr>
    <!--
    <input #cb type="checkbox" (change)="agreed = cb.checked">
    <h1>{{ cb.checked }}</h1>
    <div *ngIf="agreed" class="player">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex recusandae nisi inventore, neque consectetur dicta, magnam sit reprehenderit repellendus molestias sed voluptatum? Soluta explicabo unde suscipit quibusdam sed vitae!
    </p>
    </div>
    -->
    <input type="checkbox" [(ngModel)]="agreed" >
    <h1>{{ agreed }}</h1>
    <div *ngIf="agreed" class="player">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex recusandae nisi inventore, neque consectetur dicta, magnam sit reprehenderit repellendus molestias sed voluptatum? Soluta explicabo unde suscipit quibusdam sed vitae!
    </p>
    </div>

    <ul>
        <li>{{ heroes[0] }}</li>
        <li>{{ heroes[1] }}</li>
        <li>{{ heroes[2] }}</li>
        <li>{{ heroes[3] }}</li>
    </ul>

    <ul>
        <li *ngFor="let hero of heroes">{{ hero }}</li>
    </ul>
    `,
    styles : [`
        .box{
            border : 10px dotted red;
        }
        .boxer{
            background-color:orange;
            color : white;
        }
    `]
})
export class SecondComponent{
    classval = 'box';
    agreed = false;
    rating = 6;
    heroes = ["Batman","Spiderman", "Ant Man", "Deadpool" , "Hulk"];
    clickHandler(message){
        console.log(message);
    }
}