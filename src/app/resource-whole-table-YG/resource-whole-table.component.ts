import { Component, OnInit, Input } from '@angular/core';
import { GetResourceRequestService, DeliverTableService } from '../service/get-resource-request.service';
import { Resource } from '../Model/Resource';
import { Subscription } from 'rxjs';
import { ProjectList } from '../Model/ProjectList';
import { ResourceList } from '../resource-page/ResourceList';

@Component ({
  selector: 'app-resource-whole-table',
  templateUrl: './resource-whole-table.component.html',
  styleUrls: ['./resource-whole-table.component.css']
})

export class ResourceWholeTableComponent implements OnInit {
  @Input() pid = 1;

  constructor(private getservice: GetResourceRequestService, private getdeliver: DeliverTableService) { }

  projectList: ProjectList[];
  resourceList: Resource[];
  columnlist: string[];
  currentPid: number;
  wholeTable: object[] = [];
  wholeTableByProject: object[] = [];
  subscription: Subscription;
  finalTable: string[];

  errorMessage: string;
  requestColumnURL = 'http://192.168.1.172:8080/Project1/res/getColumnNames';
  requestWholeURL = 'http://192.168.1.172:8080/Project1/res/displayWhole';
  requestProjectURL = 'http://192.168.1.172:8080/Project1/project/display';
    ngOnInit(){
        this.subscription = this.getdeliver.deliverAnnounced$.subscribe(
          table => {console.log(table); this.finalTable = table;});
        this.getColumn();
  }

  getColumn(){
    this.getservice.getResponse(this.requestColumnURL).subscribe(
      (data: string[]) => {
        this.columnlist = data;
        // console.log(this.columnlist);
        this.getWhole();
      },
      (error) => {this.errorMessage = error; }
    );
  }

  getProject(){
    this.getservice.getResponse(this.requestProjectURL).subscribe(
      (data: ProjectList[]) => {
        this.projectList = data;
        console.log(this.projectList);
      }
    );
  }

  makeWholeByProject() {
    if(this.currentPid === undefined) {
      this.wholeTableByProject = this.wholeTable;
    } else {
      let currentProject = this.projectList.find(proj => proj.pid === this.currentPid);
      let listCostCode = currentProject.resources;

      this.wholeTableByProject = [];
      for(let codes of listCostCode){
        let row = this.wholeTable.find(row => row['cost_code'] === codes['cost_code']);
        if(row) {
          this.wholeTableByProject.push(row);
        }
      }
    }
  }

  getWhole(){
    this.getservice.getResponse(this.requestWholeURL).subscribe(
      (data: Resource[]) => {
        this.resourceList = data;
        // console.log(this.resourceList);
        this.makeTable();
        this.getProject();
        this.makeWholeByProject();
      },
      (error) => {this.errorMessage = error; }
    );
  }

  makeTable(){
    for(let row of this.resourceList){
      let rowcnt: object[] = [];
      for(let columnname of this.columnlist){
        rowcnt.push({columnname: ''});
      }
      rowcnt['name'] = row.name;
      rowcnt['cost_code'] = row.cost_code;
      for(let columnpair of row.columns){
        rowcnt[columnpair[0]] = columnpair[1];
      }

      this.wholeTable.push(rowcnt);
    }
  }


}
