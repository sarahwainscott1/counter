import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  nbr: number = 0;
  color: string = "black";
  change(amt:number):void {
    this.nbr+=amt;
    this.color = (this.nbr % 2 === 0? "pink" : "black");
  }
  
}
