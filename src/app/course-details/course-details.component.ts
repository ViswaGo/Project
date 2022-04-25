import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
    <h1>
    You are selected the course with id = {{courseId}}
    </h1>
    <nav class="mouse">
    <a (click)="toPrevious()" > Previous </a>
    <a (click)="toNext()"> Next </a>
    <a (click)="goBack()"> Back </a>
    </nav>
    <nav>
    <a  (click)="showDuration()">Course Duration</a>
    <a (click)="showFee()">Course Fee </a>

    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      text-align:center;
      color:violet;
      font-family:arial;
      font-weight:bold;
    }
    `
  ]
})
export class CourseDetailsComponent implements OnInit {
  public courseId;
  constructor( private _activatedRoute: ActivatedRoute, private _route : Router) { }

  ngOnInit(){
    //let cId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    //this.courseId = cId;
    this._activatedRoute.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.courseId = id;
    }); 
  }
  toPrevious(){
    let previousId = this.courseId - 1;
    this._route.navigate(['/course',previousId]);
  } 
  toNext(){
    let nextId = this.courseId + 1;
    this._route.navigate(['/course',nextId]);
  }
  goBack(){
    let selectedId = this.courseId ? this.courseId:null;
    //this._route.navigate(['/course',{id:selectedId}]);
    this._route.navigate(['../',{id:selectedId}],{relativeTo:this._activatedRoute})
  }
  showDuration(){
    this._route.navigate(['duration'],{relativeTo:this._activatedRoute});
  }
  showFee(){
    this._route.navigate(['fee'],{relativeTo:this._activatedRoute});

  }
}
