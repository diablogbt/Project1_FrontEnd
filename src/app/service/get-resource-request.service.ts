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

@Injectable({
  providedIn: 'root'
})
export class DeliverTableService {
  private resultTable = new BehaviorSubject([]);
  private colName = new BehaviorSubject([]);

  deliverAnnounced$ = this.resultTable.asObservable();
  deleverCol$ = this.colName.asObservable();

  announceDeliver(table){
    this.resultTable.next(table);
  }
  colDeliver(colList) {
    this.colName.next(colList);
  }
}



