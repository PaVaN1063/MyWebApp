import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apis } from './api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getApi(endpoint: string) {
    console.log('get request url --> ', endpoint);
    return this.http.get(endpoint).pipe(
      map((uresponse: any) => {
        console.log('GET API res', uresponse);
        return uresponse;
      })
    );
  }
  deleteApi(endpoint: string): Observable<any> {
    console.log('delete request url --> ', endpoint);

    return this.http.delete(endpoint).pipe(
      map((uresponse: any) => {
        console.log('delete API res', uresponse);
        return uresponse;
      })
    );
  }
  postApi(endpoint: string, data: any): Observable<any> {
    console.log('post request url --> ', endpoint, data);
    return this.http.post<any>(endpoint, data).pipe(
      map((uresponse: Response) => {
        console.log('POST API res', uresponse);
        return uresponse;
      })
    );
  }
  putApi(endpoint: string, data: any): Observable<any> {
    console.log('put request url --> ', endpoint, data);
    return this.http.put(endpoint, data).pipe(
      map((uresponse: any) => {
        console.log('PUT API response', uresponse);
        return uresponse;
      })
    );
  }
}
