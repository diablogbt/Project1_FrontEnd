import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../service/get-request.service';
import { Resource } from '../Model/Resource';
import { DeliverTableService } from '../service/deliver-table.service';
import { ResourceList } from '../resource-page/ResourceList';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {

  constructor(private http:HttpClient, private deliverservice: DeliverTableService) { }

  subs: Subscription;
  resourceListAll: Resource[];
  columnlist: string[] = ['cost_code', 'name'];

  errorMessage: string;

  ngOnInit(): void {
    this.displayTableAll();
  }

  displayTableAll() {
    this.subs = this.deliverservice.deliverAnnounced$.subscribe(
      (data: Resource[]) => {
        this.resourceListAll = data;
        console.log(this.resourceListAll);
      },
      (error) => this.errorMessage = error
    );
  }

}
