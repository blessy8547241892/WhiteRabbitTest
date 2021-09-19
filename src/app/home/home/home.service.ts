import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(" https://randomuser.me/api/0.8/?results=20");
}
}
