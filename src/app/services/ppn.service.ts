import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PpnService {
  private userid: string | null = null;
  private userDataUrl = 'http://localhost:8000/users';
  private titleSource = new BehaviorSubject<string>('');
  currentTitle = this.titleSource.asObservable();

  constructor(private http: HttpClient) { }

  setUser(userid: string): void {
    this.userid = userid;
    // console.log("setted userid");
    // console.log(this.userid);
  }

  getUser(): string | null {
    return this.userid;
  }

  clearUser(): void {
    this.userid = null;
    // console.log("cleared");
    // console.log(this.userid);
  }

  fetchUserDataByUserid(userid: string): Observable<any> {
    return this.http.get(this.userDataUrl).pipe(
      map((users: any) => users.find((user: any) => user.id === userid))
    );
  }

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

}
