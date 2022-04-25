import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-two',
  template: `
    <h1>
      routing-two works!
    </h1>
  `,
  styles: [`
   h1 {
     color:blue;
     text-align:center;
     font-family:play;
     font-weight:bold;
     font-size:30px
   }
  `
  ]
})
export class RoutingTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
