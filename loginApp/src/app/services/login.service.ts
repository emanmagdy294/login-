import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor(private _HttpClient: HttpClient) { }
  login(formData: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData);
  }
}
