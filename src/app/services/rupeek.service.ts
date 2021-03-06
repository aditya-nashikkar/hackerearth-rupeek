import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RupeekService {

  private baseUrl: string = "http://www.mocky.io/v2/5bdd28dd32000075008c6227";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http: Http) { }

  getData() {
    return this._http.get(this.baseUrl, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
    
  }
  errorHandler(error:Response) {
    return Observable.throw(error);
  }

}
