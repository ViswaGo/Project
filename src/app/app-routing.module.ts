import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TestComponent } from './test/test.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';

const routes: Routes = [
  {path:'', redirectTo:'/course', pathMatch:'full'},
  {path:'admin', 
    component:AdminHomeComponent,
    canActivate:[AdminAccessGuard]
  },
   {path:'profile', component : ProfileComponent},
  {path:'test', component : TestComponent},
  {path:'course',component:CourseListComponent},
  {path:'course/:id', 
        component:CourseDetailsComponent,
        children : [
          {path: 'duration', component:CourseDurationComponent,},
          {path:'fee', component:CourseFeeComponent}
        ]
},
  {path:'routing1', component: RoutingOneComponent},
  {path:'routing2', component:RoutingTwoComponent},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings = [RoutingOneComponent, RoutingTwoComponent,PageNotFoundComponent, StudentListComponent, StudentDetailsComponent,CourseListComponent,CourseDetailsComponent,StudentDetailsComponent,CourseDurationComponent,CourseFeeComponent];




