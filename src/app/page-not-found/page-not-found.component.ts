import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      Page Not Found- 404 Error!
    </h1>
  `,
  styles: [`
  h1 {
    text-align:center;
    font-size:50px
  }
  `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let promise = new Promise((resolve) => {
      console.log("Promise is Running");
    })
  }

}
