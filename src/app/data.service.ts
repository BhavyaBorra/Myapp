import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDataUrl = 'http://localhost:8000/users';
  private apiUrl = 'http://localhost:8000/uploads';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.userDataUrl, userData);
  }

  fetchUserData(): Observable<any> {
    return this.http.get(this.userDataUrl);
  }

  fetchUserDataByUserid(userid: string): Observable<any> {
    return this.http.get(this.userDataUrl).pipe(
      map((users: any) => users.find((user: any) => user.id === userid))
    );
  }

  updateUserMobileNumber(userid: string, newMobileNumber: string): Observable<any> {
    const url = `${this.userDataUrl}/${userid}`;
    return this.http.get(url).pipe(
      mergeMap((user: any) => {
        user.mobilenumber = newMobileNumber;
        return this.http.put(url, user).pipe(
          catchError((error) => {
            console.error('Error in DataService:', error);
            return throwError(error);
          })
        );
      })
    );
  }

  updateUserEmail(userid: string, newEmail: string): Observable<any> {
    const url = `${this.userDataUrl}/${userid}`;
    return this.http.get(url).pipe(
      mergeMap((user: any) => {
        user.email = newEmail;
        return this.http.put(url, user).pipe(
          catchError((error) => {
            console.error('Error in DataService:', error);
            return throwError(error);
          })
        );
      })
    );
  }

  updateUserAddress(userid: string, newAddressline1: string, newAddressline2: string, newPostalcode: string, newCountry: string ): Observable<any> {
    const url = `${this.userDataUrl}/${userid}`;
    return this.http.get(url).pipe(
      mergeMap((user: any) => {
        user.addressline1 = newAddressline1;
        user.addressline2 = newAddressline2;
        user.postalCode = newPostalcode;
        user.country = newCountry;
        return this.http.put(url, user).pipe(
          catchError((error) => {
            console.error('Error in DataService:', error);
            return throwError(error);
          })
        );
      })
    );
  }
  
  uploadFile(fileData: any): Observable<any> {
    const formData = new FormData();
    console.log("inside update service", fileData);
    formData.append('visaNumber', fileData.visaNumber);
    formData.append('passportNumber', fileData.passportNumber);
    formData.append('expiryDate', fileData.expiryDate);
    formData.append('agree', fileData.agree);
    formData.append('file', fileData.file);
    console.log("formdata after appending", formData);

    return this.http.post(this.apiUrl, fileData);
  }
}
