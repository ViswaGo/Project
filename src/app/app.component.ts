import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  public parentMsg = "This is Parent Message";
  
  public msg="";

  getName()
  {
    alert("onClick Function")
  }

  
  
}
