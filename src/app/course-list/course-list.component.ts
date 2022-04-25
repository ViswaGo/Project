import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  template: `
    <h1>
      course-list component!
    </h1>
    <ul (click)="onSelect(abc)" class="items">
      <li  *ngFor = "let abc of course"> 
      <span class="badge"> <a [routerLink]="['/course/',abc.id]" routerLinkActive="Active">{{abc.id}} </a> </span> - {{abc.name}}
      </li>
      </ul>
  `,
  styles: [
  ]
})
export class CourseListComponent implements OnInit {

  public course = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "React"},
    {"id":3, "name": "Vue"},
    {"id":4, "name": "Bootstrap"},
    {"id":5, "name": "MongoDB"}

  ]

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }
  public selectedId;
  public abc;
  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
onSelect(abc){
  //this._router.navigate(['/course', abc.id]);
  this._router.navigate([abc.id],{relativeTo:this._activatedRoute});

}
isSelected(abc){
  return abc.id === this.selectedId;

}

}
