import { Component, OnInit, Input } from '@angular/core';
import { GetResourceRequestService} from '../service/get-resource-request.service';
import { Resource } from '../Model/Resource';
import { Subscription } from 'rxjs';
import { ProjectList } from '../Model/ProjectList';
import { ResourceList } from '../resource-page/ResourceList';
import { element } from 'protractor';
import { DeliverTableService } from '../service/deliver-table.service';

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
  allColumnList: string[];
  displayedColumnList: string[];
  currentPid: number;
  wholeTable: object[] = [];
  wholeTableByProject: {pid: number, columns: object[], wholetable: object[]}[] = [];
  wholeTableByProjectElement: object[] = [];
  displayedWholeTableByProject: object[] = [];

  subscription: Subscription;
  finalTable: string[];

  errorMessage: string;
  targetURL = 'http://localhost:8080/Project1';
  requestColumnURL = this.targetURL + '/res/getColumnNames';
  requestWholeURL = this.targetURL + '/res/displayWhole';
  requestProjectURL = this.targetURL + '/project/display';
    ngOnInit() {
        this.subscription = this.getdeliver.deliverAnnounced$.subscribe(
          table => {this.finalTable = table; });
        this.getColumn();
  }

  setGlobalProperties(){
    this.displayedColumnList = this.allColumnList;
    this.displayedWholeTableByProject = this.wholeTable;
  }

  getColumn() {
    this.getservice.getResponse(this.requestColumnURL).subscribe(
      (data: string[]) => {
        this.allColumnList = data;
        // console.log(this.columnlist);
        this.getWhole();
      },
      (error) => {this.errorMessage = error; }
    );
  }

  getProject() {
    this.getservice.getResponse(this.requestProjectURL).subscribe(
      (data: ProjectList[]) => {
        this.projectList = data;
        this.makeWholeByProject();
        this.setGlobalProperties();
      }
    );
  }

  makeWholeByProject() {
    for (const proj of this.projectList) {

      const thistable: object[] = [];
      for (const projcode of proj.resources) {
        const row = this.wholeTable.find(thisrow => thisrow['cost_code'] === projcode.cost_code);
        if (row) {
          thistable.push(row);
        }
      }

      const columns = proj.columns;

      this.wholeTableByProject.push({pid: proj.pid, columns, wholetable: thistable});
    }
  }

  getWhole() {
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

  makeTable() {
    for (const row of this.resourceList) {
      const rowcnt: object[] = [];

      rowcnt['name'] = row.name;
      rowcnt['cost_code'] = row.cost_code;
      for (const columnpair of row.columns) {
        rowcnt[columnpair[0]] = columnpair[1];
      }

      this.wholeTable.push(rowcnt);
    }
  }

  dealPidChange(proj: ProjectList) {
    if (!proj || proj.pid == 0) {
      this.displayedColumnList = this.allColumnList;
      this.displayedWholeTableByProject = this.wholeTable;
    } else {
      let displayedContent = this.wholeTableByProject.find(projtable => projtable.pid === proj.pid);
      let commonContent = this.wholeTableByProject.find(projtable => projtable.pid === 0).columns.map(element => element['column_name']);
      this.displayedWholeTableByProject = displayedContent.wholetable;
      this.displayedColumnList = ['cost_code', 'name'];
      this.displayedColumnList = this.displayedColumnList.concat(commonContent)
        .concat(displayedContent.columns.map(element => element['column_name']));
    }

  }

}
