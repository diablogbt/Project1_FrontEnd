import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,BehaviorSubject } from 'rxjs';
import { ProjectList } from '../Model/ProjectList';


@Injectable({
  providedIn: 'root'
})
export class GetResourceRequestService {

  constructor(private http: HttpClient) { }

  getResponse(configUrl: string, id?: number) {
    if (id === undefined) {
      return this.http.get(configUrl);
    } else {
      return this.http.get(configUrl + id);
    }
  }

}



