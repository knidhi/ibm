import { Component } from "@angular/core";
@Component({
    selector : 'app-third',
    template : `
    <div class="container-fluid">

    <div *ngIf="herodata; else noheroes; then localheroes">
        <h1> Hero List </h1>
    </div>

    <ng-template #noheroes>
        <h1> No Hero List </h1>    
    </ng-template>

    <ng-template #localheroes>
        <h1> Local Hero List </h1>    
    </ng-template>

    <!--div *ngIf="!herodata">
        <h1> No Hero List </h1>
    </div-->



    <table class="table table-responsive table-striped">
    <thead>
        <tr>
            <th>Sl #</th>
            <th>Title</th>
            <th>Full Name</th>
            <th>Poster</th>
            <th>City</th>
            <th>Ticket Price</th>
            <th>Release Date</th>
            <th>Movies Count</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let hero of herodata; let idx = index; let fs = first; let ls = last; let od = odd; let ev = even">
            <td>{{ idx+1 }}</td>
            <td>
            <span *ngIf="fs">First Hero</span>
            <span *ngIf="ls">Last Hero</span>
            <span *ngIf="od">Odd Hero</span>
            <span *ngIf="ev">Even Hero</span>
            {{ hero.title | uppercase }}</td>
            <td>{{ hero.firstname+' '+hero.lastname }}</td>
            <td>
                <img width="40" src="{{ hero.poster }}" alt="{{ hero.title }}">
            </td>
            <td>{{ hero.city }}</td>
            <td>{{ hero.ticketprice | currency:'INR' : false : '3.2-3' }} </td>
            <td>{{ hero.releasedate | date:'dd - MMM - yyyy' }}</td>
            <td>{{ hero.movieslist.length }}</td>
        </tr>
    </tbody>
   </table>
    </div>
<hr>
<input type="range" min="0" max="10" [(ngModel)]="power">
<div [ngSwitch]="power">
    <p *ngSwitchCase="5">Recovered</p>
    <p *ngSwitchCase="6">Low Power</p>
    <p *ngSwitchCase="7">Strong</p>
    <p *ngSwitchCase="8">Stronger</p>
    <p *ngSwitchCase="9">Unbeatable</p>
    <p *ngSwitchDefault >Power is now : {{ power }}</p>
</div>

<hr>

<ul>
    <ng-template ngFor  let-hero [ngForOf]="herodata" >
        <li>{{ hero.title }}</li>
    </ng-template>
</ul>



    `
})
export class ThirdComponent{
    power = 5;
 herodata = [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.4567,
    "releasedate": "1/26/2018",
    "poster": "assets/images/batman.jpg",
    "movieslist": [
        {
            "title": "Batman Begins",
            "poster": "assets/images/bat1_tn.jpg"
        }, {
            "title": "Dark Knight",
            "poster": "assets/images/bat2_tn.jpg"
        }, {
            "title": "Dark Knight Raises",
            "poster": "assets/images/bat3_tn.jpg"
        }
    ]

},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.6789,
    "releasedate": "1/27/2018",
    "poster": "assets/images/superman.jpg",
    "movieslist": [
        {
            "title": "Superman The Movie",
            "poster": "assets/images/super1_tn.jpg"
        }, {
            "title": "Superman Returns",
            "poster": "assets/images/super2_tn.jpg"
        }, {
            "title": "Superman Man of Steel",
            "poster": "assets/images/super3_tn.jpg"
        }
    ]

},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122,
    "releasedate": "1/27/2018",
    "poster": "assets/images/ironman.jpg",
    "movieslist": [
        {
            "title": "Ironman",
            "poster": "assets/images/iron1_tn.jpg"
        }, {
            "title": "Ironman 2",
            "poster": "assets/images/iron2_tn.jpg"
        }, {
            "title": "Ironman 3",
            "poster": "assets/images/iron3_tn.jpg"
        }
    ]

}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.6456,
    "releasedate": "1/27/2018",
    "poster": "assets/images/phantom.jpg",
    "movieslist": [
        {
            "title": "The Phantom Slam Evilz",
            "poster": "assets/images/phantom1_tn.jpg"
        }
    ]

}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 1.3456,
    "releasedate": "9/26/2018",
    "poster": "assets/images/spiderman.jpg",
    "movieslist": [
        {
            "title": "Spiderman",
            "poster": "assets/images/spider1_tn.jpg"
        }, {
            "title": "Spiderman 2",
            "poster": "assets/images/spider2_tn.jpg"
        }, {
            "title": "Spiderman 3",
            "poster": "assets/images/spider3_tn.jpg"
        }
    ]
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.3456978978,
    "releasedate": "11/26/2018",
    "poster": "assets/images/wonderwoman.png",
    "movieslist" : []
}]
}