import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerurl ="http://localhost:5000/api/auth";
  constructor(private http: HttpClient) { }

  loginfun(data:any) :Observable<any>{
    return this.http.post(`${this.registerurl}/login`,data)
  }
 signup(data: any): Observable<any> {
    return this.http.post(`${this.registerurl}/register`, data);
  }
}
