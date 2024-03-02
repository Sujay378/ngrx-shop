import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  urlConstructor(service: string, path: string) {
    return `${environment.entryApi}${environment.api[service][path]}`;
  }

  setParams(url: string, params: Record<string, string>) {
    return Object.keys(params).reduce((acc, val) => {
      return acc.replace(`[${val}]`, params[val]);
    }, url);
  }
  get<T extends object>(
    service: string,
    path: string,
    headers: HttpHeaders = new HttpHeaders({}),
    params: Record<string, string> = {},
  ) {
    let url = this.urlConstructor(service, path);

    url = this.setParams(url, params);

    return this.http.get<T>(url, { headers, observe: 'response' }).pipe(
      map((response) => {
        if (response.headers.get('authorization'))
          localStorage.setItem(
            'authorization',
            JSON.stringify(response.headers.get('authorization')),
          );
        return response.body;
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error.error)),
    );
  }

  post<T extends object, P extends object>(
    service: string,
    path: string,
    payload: P,
    headers: HttpHeaders = new HttpHeaders({}),
    params: Record<string, string> = {},
  ) {
    let url = this.urlConstructor(service, path);
    url = this.setParams(url, params);
    return this.http
      .post<T>(url, payload, {
        observe: 'response',
        headers,
      })
      .pipe(
        map((response) => {
          if (response.headers.has('authorization'))
            localStorage.setItem(
              'authorization',
              JSON.stringify(response.headers.get('authorization')),
            );
          return response.body;
        }),
        catchError((error) => throwError(() => error.error)),
      );
  }
}
