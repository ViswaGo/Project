import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-one',
  template: `
    <h1>
      routing-one works!
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
export class RoutingOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
