import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceList } from '../resource-page/ResourceList';
import { DeliverTableService } from './deliver-table.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient, private deliverservice: DeliverTableService) { }

  requestResourceAll = 'http://localhost:8080/Project1/res/displayResources';

  get(url: string, pathparam?: string) {
    let requrl = url;
    if (pathparam !== undefined) {
      requrl += pathparam;
      }
    // this.http.get<T>(requrl).subscribe(
    //   (data: T) => {result = data; console.log(result); },
    //   error => {console.log(error); result = null; }
    // );

    return this.http.get(requrl);
  }

  getResources(){
    let list: ResourceList[] = [];
    this.http.get(this.requestResourceAll).subscribe(
      (data: ResourceList[]) => {
        list = data;
        this.deliverservice.announceDeliver(list);
      }
    );
  }

}
