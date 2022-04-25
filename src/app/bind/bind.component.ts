import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bind',
  template: `
  <h1> {{fromParent}} </h1>
  <br><br>
  <button (click)="fireEvent()" >Click Me</button>
  <h2>
  {{name1 }}
  </h2>
    <input #myMsg type="text">
    <button (click)="myData(myMsg.value)">Capture</button>
    <br>
    <br>
    <input [(ngModel)]=data type="text">
    <button type="button">Click Me</button>
      
    <br><br>
    {{data}}
    <br><br>
    <h1>ngIf</h1>
    <h1 *ngIf = "status; then trueBlock else elseBlock"> Welcome to "If Part " for Mr. {{name}} </h1>
    <ng-template #elseBlock>
    <h1>Welcome to "Else Part " for Mr. {{name}} </h1>
    </ng-template>
    <ng-template #trueBlock>
    <h1>Welcome to "True Part " for Mr. {{name}} </h1>
    </ng-template><br><br>
  <h1>ngSwitch</h1>
    <div [ngSwitch]="myChoice">
    <div class="switchCase">
      <div *ngSwitchCase="'one'">First Block</div>
      <div *ngSwitchCase="'2'">Second Block</div>
      <div *ngSwitchCase="'three'">Third Block</div>
      <div *ngSwitchDefault>Invalid Choice</div>
    </div>
    </div>
    <br><br>
    <div class="for">
    <h1>ngFor</h1>
    <div *ngFor = "let c of subjects;  index as i; first as f; last as t; even as e; odd as o">
    <h1>{{i}} --> {{f}} --> {{t}} --> {{e}} --> {{o}} --> {{c}}</h1>
    </div>
    </div>
    <br>
    <h1> {{name}} </h1>
<h1> {{name | uppercase}} uppercase </h1>
<h1> {{name | lowercase}} lowercase</h1>
<h1> {{message | titlecase}} </h1>
<h1> {{name | slice:3:5}} </h1>
<h1> {{person | json}} </h1>
<h1> {{4.567 | number : '1.2-3'}} </h1>
<h1> {{4.567 | number : '2.4-4'}} </h1>
<h1> {{0.25 | percent}} </h1>
<h1> {{0.25 | currency : 'INR'}} </h1>
<h1> {{date}} </h1>
<h1> {{date | date: 'short'}} </h1>
<h1> {{date | date: 'shortDate'}} </h1>
<h1> {{date | date: 'shortTime'}} </h1>
<h1> {{date | date: 'medium'}} </h1>
<h1> {{date | date: 'mediumDate'}} </h1>
<h1> {{date | date: 'mediumTime'}} </h1>
<h1> {{date | date: 'long'}} </h1>
<h1> {{date | date: 'longTime'}} </h1>
<h1> {{date | date: 'longDate'}} </h1>


  `,
  styles: [`
  h1{
    text-align:center;
    color:red;
    font-size:40px;
    font-style:italic
  }
  .switchCase{
    text-align:center;
    font-width:bold;
    color:blue;
    font-size:40px;

  }
  .for{
    text-align:center;
    font-width:italic;
    color:green;
    font-size:60px;

  }
  `
  ]
})
export class BindComponent implements OnInit {

  @Input() public fromParent;

  @Output() public childInfo = new EventEmitter();
  public subjects =["Angular","React","Vue","Bootstrap"] ;
  public myChoice = "2";
  public name1 = "Binding";

  public data = "data";

  public name = "Mukesh";
  public status = true;
  public date = new Date();

  public name2 = "AngularTutorual";
  public message = "Welcome to angular";
  public person = {
    "firstname" : "Welcome",
    "secondname" : "Angular"
  }


  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childInfo.emit("This is from child");
  }

  myData(value){
    console.log(value);
  }
}
