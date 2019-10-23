import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliverTableService {
  private resultTable = new BehaviorSubject([]);
  private colName = new BehaviorSubject([]);
  private pName = new BehaviorSubject<string>("");

  deliverAnnounced$ = this.resultTable.asObservable();
  deleverCol$ = this.colName.asObservable();
  delieverPid$ = this.pName.asObservable();

  announceDeliver(table){
    this.resultTable.next(table);
  }
  colDeliver(colList) {
    this.colName.next(colList);
  }

  pidDeliver(pid){
    this.pName.next(pid);
  }
}
