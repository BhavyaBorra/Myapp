import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/users';

  constructor(private http: HttpClient) { }

  getUserByuserid(userid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${userid}`);
  }

  updateUser(user:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }
}
