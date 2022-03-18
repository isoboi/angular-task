import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public totalCapacity = 10000000;

  public allocatedCapacity = 4500000;

  public usedCapacity = 2500000;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.totalCapacity = 100000000;
    }, 3000);
  }

}
