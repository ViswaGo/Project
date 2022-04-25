import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <p>
      Welcome to {{name}}
    </p>
    <p>
    {{"Welcomt to :" + name}}
    </p>
    <p>
    {{name.length}}
    </p>
    <p>
    {{name.toUpperCase()}}
    </p>
    <p>
    {{userName()}}
    </p>
    <p>
    {{myUrl}}
    </p>
  <br>
    <input type="text" value="Angular"><br><br>
    <input [id]="courseId" type="text" value="Property Binding"><br><br>
    <input  [disabled] ="isDisabled" id="{{courseId}}" type="text" value="Interpolation with PB"><br><br>
    <input  bind-disabled ="isDisabled" id="{{courseId}}" type="text" value="Interpolation with PB [ ]"><br><br>
<h2 class="TextColor"> class binding </h2>
<h2 [class]="myText"> class binding </h2>
<h2 [class]="myText1"> class binding </h2>
<h2 [class]="myText2"> class binding </h2>
<h2 [class.TextStyle]="required"> class binding </h2><br>
<h2 [ngClass]="Group"> class binding </h2>

<h2 [style.color] = "myStyle"> Style Binding </h2>

<h2 [style.color] = "required ? 'green' : 'red' "> Style Binding </h2>
<h2 [ngStyle]="myStyles"> Style binding </h2><br><br>

<button (click)="onClick()" type="button">Click Here</button>
<h2>{{greetings}}</h2><br><br>

<input  #msg type="text">
<button (click)="myMessage(msg.value)" type="button">Capture</button>

  `,
  styles: [`
  P{
    text-align: center;
  font-size:30px;
  color: violet;
  }

  h2{
    text-align:center;
    font-size:30px;
    color:red;
  }
  .TextColor{
    color:red;
  }
  .TextSize{
    font-size:60px;
  }
  .TextStyle{
    font-style:italic;
  }
  
  `
  ]
})
export class TestComponent implements OnInit {
public myStyle = "#ff00ff";
public myStyles = {
  color : "red",
  fontStyle : "italic",
  fontSize : "40px"
}


  public myText = "TextColor";
  public myText1 = "TextSize";
  public myText2 = "TextStyle";
  public required = true;

  public Group = {
    "TextColor" : this.required,
    "TextSize" : this.required,
    "TextStyle" : !this.required
  }
  public isDisabled=true;
  public courseId = "12345";
  public name = "Test Angular ";
  public myUrl = window.location.href;

  public greetings = "";

  constructor() { }

  ngOnInit(): void {
   
  }
    userName()
    {
      return "Welcome : " +this.name;
    }
    onClick(){
      this.greetings="Event Binding";
    }
   myMessage(message){
     console.log(message);
   }

   
}
