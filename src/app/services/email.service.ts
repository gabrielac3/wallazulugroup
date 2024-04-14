import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class EmailService {

  baseURL = "https://apiinfowalla.wallazulugroup.org/api/v1/";
  apikey = '6A45033403518E4C293E73E4ECC9B6F14E693842F8CE8486FC89178C4791AFAB';
  private token: string = '';

  constructor(private http: HttpClient) { }

  getToken() : Observable <any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apikey,
    });
    return this.http.post(this.baseURL+'security/GetToken',{}, { headers })
  }


/*   sendMail(form: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWluZm93YWxsYS53YWxsYXp1bHVncm91cC5vcmcvYXBpL3YxL3NlY3VyaXR5L0dldFRva2VuIiwiaWF0IjoxNzEzMTEyMDEyLCJleHAiOjE3MTMxMTIwNzIsIm5iZiI6MTcxMzExMjAxMiwianRpIjoiRkI3eU5PNnVnaG0xQ05MbiIsInN1YiI6Inp1bGx1X2Rldl9jb250YWN0IiwicHJ2IjoiNTg3MDg2M2Q0YTYyZDc5MTQ0M2ZhZjkzNmZjMzY4MDMxZDExMGM0ZiJ9.uk32DzEZEyChjqJfOplH-DLBkvsVYCT6qRPserL4dfE'
    });
    const body = JSON.stringify(form);
    return this.http.post(this.baseURL+ 'mailing/Contactanos', body, { headers, withCredentials: true })
  } */

  sendMail(form: any): Observable<any> {

    console.log(form);

    return this.getToken().pipe(
      mergeMap((response) => {
        this.token = response.token;

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        });

        const body = JSON.stringify(form);
        return this.http.post(this.baseURL+ 'mailing/Contactanos', body, { headers, withCredentials: true });
      })
    );
  }


}
