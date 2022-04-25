import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  public results : any = [];
  public _url:string = "https://restcountries.eu/rest/v2/name/";

  constructor(private _http:HttpClient) { }

  ngOnInit() {
           
  }
  search(country:any){
    console.log(country);
    this._http.get(this._url+country)
    .toPromise().then((data:any) => {
      console.log(data);
    });
  }

}
