import { Injectable } from '@angular/core';
 import {Http, Response, Headers} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import {Accinterface} from "./Accinterface";
@Injectable()
export class ServiceapiService {
  private _postsURL = "http://vkoilmill.com/testaccountswebapi/";
  
  constructor(private http: Http) {
 
   }
   PostToserver(dd,apiurl) {
    const head = new Headers();
    head.append('Access-Control-Allow-Headers', 'Content-Type');
    head.append('Access-Control-Allow-Methods', 'POST');
    head.append('Access-Control-Allow-Origin', '*');
    head.append('Content-Type', 'application/json');
     let body = JSON.stringify(dd);
        return this.http.post(this._postsURL+apiurl, body, {headers : head})
        .map((response: Response) => {
            return response.json();
        })
}



private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}

