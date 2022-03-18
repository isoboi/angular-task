import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalCapacity = 10000000;
  allocatedCapacity = 4500000;
  usedCapacity = 2500000;



  constructor() {
    setTimeout(() => {
      this.totalCapacity = 100000000;
    }, 3000)
  }

}
