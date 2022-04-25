import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: `
    <h1>
      Welcome to admin page!
    </h1>
  `,
  styles: [
  ]
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
