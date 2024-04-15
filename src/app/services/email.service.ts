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

  sendMail(form: any): Observable<any> {

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
