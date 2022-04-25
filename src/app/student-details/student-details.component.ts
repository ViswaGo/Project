import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `

  <h1>
  student-details component!
</h1>
<h2> {{errMsg}} </h2>
<ul *ngFor = "let x of students">
 <li> {{x.id}} - {{x.name}} - {{x.course}} </li>
</ul>
<p>{{msg | lowercase}}</p>
<p>medium : {{toDate | date:'medium'}} </p>

  `,
  styles: [`
  h1{
    font-size:40px;
    text-align:center;
    
  }
  `
  ]
})
export class StudentDetailsComponent implements OnInit {

  public students = [];
  public errMsg;
  
  constructor( private _stdService : StudentService ) { }

  ngOnInit(): void {
        this._stdService.getStudents()
        .subscribe(data => this.students = data, error => this.errMsg = error );

      }
      msg="Job Searching!";
      toDate: Date = new Date();
      


    }
