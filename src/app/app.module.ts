import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import {HttpClientModule} from '@angular/common/http'
import { myRoutings } from './app-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';
import { PromiseComponent } from './promise/promise.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TestComponent,
    BindComponent,
    myRoutings,
    AdminHomeComponent,
    PromiseComponent
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [StudentService,AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
