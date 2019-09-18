import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {logger} from 'codelyzer/util/logger';
import {log} from 'util';
import {ResourceList} from '../resource-page/ResourceList'


const httpOptions={
  headers: new HttpHeaders({'content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private serviceUrl = 'http://192.168.1.99:8080';

  constructor(private httpClient: HttpClient) {

   }

   getResourceList(url: string):Observable<ResourceList[]>{
     return this.httpClient.get<ResourceList[]>(url);
   }
}
