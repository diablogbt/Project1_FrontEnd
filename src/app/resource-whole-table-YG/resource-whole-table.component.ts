import { Component, OnInit, Input } from '@angular/core';
import { GetResourceRequestService, DeliverTableService } from '../service/get-resource-request.service';
import { Resource } from '../Model/Resource';
import { Subscription } from 'rxjs';
import { ProjectList } from '../Model/ProjectList';
import { ResourceList } from '../resource-page/ResourceList';

@Component({
  selector: 'app-resource-whole-table-YG',
  templateUrl: './resource-whole-table.component.html',
  styleUrls: ['./resource-whole-table.component.css']
})

export class YGResourceWholeTableComponent implements OnInit {
  @Input() pid = 1;

  constructor(private getservice: GetResourceRequestService, private getdeliver: DeliverTableService) { }

  projectList: ProjectList[];
  resourceList: Resource[];
  columnlist: string[];
  currentPid: number;
  wholeTable: object[] = [];
  wholeTableByProject: {pid: number, wholetable: object[]}[] = [];
  wholeTableByProjectElement: object[] = [];
  displayedWholeTableByProject: object[] = [];
  subscription: Subscription;
  finalTable: string[];

  errorMessage: string;
  targetURL = 'http://localhost:8080/Project1';
  requestColumnURL = this.targetURL + '/res/getColumnNames';
  requestWholeURL = this.targetURL + '/res/displayWhole';
  requestProjectURL = this.targetURL + '/project/display';
    ngOnInit(){
        this.subscription = this.getdeliver.deliverAnnounced$.subscribe(
          table => {this.finalTable = table;});
        this.getColumn();
        this.displayedWholeTableByProject = this.wholeTable;
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
        this.makeWholeByProject();
      }
    );
  }

  makeWholeByProject() {
    for(let proj of this.projectList){
      if(proj.pid === 0) {continue; }

      let thistable: object[] = [];
      for(let projcode of proj.resources) {
        let row = this.wholeTable.find(thisrow => thisrow['cost_code'] === projcode['cost_code']);
        if(row) {
          thistable.push(row);
        }
      }
      this.wholeTableByProject.push({pid: proj.pid, wholetable: thistable});
    }
  }

  getWhole(){
    this.getservice.getResponse(this.requestWholeURL).subscribe(
      (data: Resource[]) => {
        this.resourceList = data;
        // console.log(this.resourceList);
        this.makeTable();
        this.getProject();
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

  dealPidChange(proj: ProjectList) {
    if(!proj) {
      this.displayedWholeTableByProject = this.wholeTable;
    }
    else {
      this.displayedWholeTableByProject = this.wholeTableByProject.find(projtable => projtable.pid === proj.pid).wholetable;
    }

  }

}
