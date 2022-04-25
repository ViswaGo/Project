import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { studentInterface } from './student';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _http:HttpClient) { }
  private _url =  "../assets/data/student.json"; 

  getStudents(): Observable<studentInterface[]>{

    return this._http.get<studentInterface[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error : HttpErrorResponse ){
    return throwError(error.message || "Unknown Error Message");
  }
  
}
