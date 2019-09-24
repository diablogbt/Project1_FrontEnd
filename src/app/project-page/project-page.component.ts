import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProjectList } from '../Model/ProjectList';
import { GetRequestService } from '../service/get-request.service';
import { Resource } from '../Model/Resource';
import { Subscription } from 'rxjs';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(private getservice: GetRequestService, private requestservice: RequestService) { }
  selection :  Resource[] =[];
  pid = 1;
  resourceListAll: Resource[];
  errorMessage: string;
  @Input() id=1;
  resourceListByProject: Resource[];
  wholeTable: object[] = [];
  wholeTableByProject: object[] = [];
  requestResourceByProjectURL = 'http://192.168.1.172:8080/Project1/res/displayByProjectId/';
  requestResourceAll = 'http://192.168.1.172:8080/Project1/res/displayResources';
  columnlist: string[];
  subsWholeTable: Subscription;
  subsWholeTableByProject: Subscription;

  ngOnInit() {
    this.displayTableAll();
    this.getWholeTable();
    this.getWholeTableByProject();
  }

  getWholeTable() {
    this.subsWholeTable = this.requestservice.deliverWholeTable$.subscribe(
      table => {
        this.wholeTable = table;
        console.log(this.wholeTable);
      }
    );
  }

  getWholeTableByProject() {
    this.subsWholeTableByProject = this.requestservice.deliverWholeTableByProject$.subscribe(
      table => {
        this.wholeTableByProject = table;
        console.log(this.wholeTableByProject);
      }
    );
  }

  displayTableByProject(pid?: number) {
    if (!pid) { pid = this.pid; }
    let tableContent =  this.wholeTableByProject.find(table => table['pid'] === pid);

    this.resourceListByProject = tableContent['wholetable'];
    this.columnlist = ['cost_code','name'].concat(
      tableContent['columns'].map(column => column['column_name'])
    ).concat(
      this.wholeTableByProject.find(table => table['pid'] === 0)['columns'].map(column => column['column_name'])
    );
    this.columnlist = Array.from(new Set(this.columnlist));
    console.log(tableContent);
  }


  displayTableAll() {
    this.getservice.getResponse(this.requestResourceAll).subscribe(
      (data: Resource[]) => {
        this.resourceListAll = data;
      },
      (error) => this.errorMessage = error
    );
  }

  dealPidChange(proj: ProjectList) {
    this.pid = proj.pid;
    this.displayTableByProject(this.pid);
  }

  toggleSelection(col) {

    let result = this.resourceListByProject.map(a => a.name);
    // let idx = this.selection.indexOf(this.search(col,this.resourceListAll));
    if(!result.includes(col)){
      this.selection.push(this.search(col,this.resourceListAll));   }
    // else{
    //   this.selection.splice(idx,1);
    // }
  }

  move(){
    // this.resourceListByProject=this.resourceListByProject.concat(this.selection);

    this.selection.map(row => {
      const rowcnt: object[] = [];

      rowcnt['name'] = row.name;
      rowcnt['cost_code'] = row.cost_code;
      for (const columnpair of row.columns) {
        rowcnt[columnpair[0]] = columnpair[1];
      }

      let originRow = this.wholeTableByProject.find(table => table['pid'] === this.pid)['wholetable'];
      if(!originRow.find(row => row['cost_code'] === rowcnt['cost_code'])) {
        originRow.push(rowcnt);
      }
    });

    // this.selection = [];
  }

  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return myArray[i];
      }
    }
  }
}
