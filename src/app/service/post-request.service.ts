import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({'Content-type': 'application/json'});

  getResponse(configUrl: string, body: any = []) {
    return this.http.post(configUrl, body, {headers: this.headers});
  }
}
