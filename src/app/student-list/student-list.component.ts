import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h1>
      student-list component!
    </h1>
    <h2> {{errMsg}} </h2>
    <ul *ngFor = "let x of students">
     <li> {{x.id}}- {{x.course}} </li>
    </ul>
  `,
  styles: [`
  h1{
    font-size:40px;
  }
  `
  ]
})
export class StudentListComponent implements OnInit {

  public students = [];
  public errMsg;

  constructor( private _stdService : StudentService ) { }

  ngOnInit(): void {
    this._stdService.getStudents()
    .subscribe(data => this.students = data, error => this.errMsg = error );

}

}
