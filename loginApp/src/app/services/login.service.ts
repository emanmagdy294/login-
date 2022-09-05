import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor(private _HttpClient: HttpClient) { }
  login(formData: any): Observable<any> {
    return this._HttpClient.post(environment.baseApi + 'signup', formData);
  }
}
