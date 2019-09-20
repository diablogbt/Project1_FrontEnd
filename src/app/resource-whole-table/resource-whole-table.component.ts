import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../service/get-request.service';
import { Resource } from '../Model/Resource';
import { DisplayService } from '../service/display.service';

@Component ({
  selector: 'app-resource-whole-table',
  templateUrl: './resource-whole-table.component.html',
  styleUrls: ['./resource-whole-table.component.css']
})
export class ResourceWholeTableComponent implements OnInit {
  constructor(private getservice: GetRequestService, private displayservice: DisplayService) { }
  resourceList: Resource[];
  columnlist: string[];
  wholeTable: object[][] = [];

  errorMessage: string;
  requestColumnURL = 'http://localhost:8080/Project1/res/getColumnNames';
  requestWholeURL = 'http://localhost:8080/Project1/res/displayWhole';

  ngOnInit(): void { }

  handleResource()  {
    this.getColumn();
  }

  getColumn() {
    this.getservice.getResponse(this.requestColumnURL).subscribe(
      (data: string[]) => {
        this.columnlist = data;
        // console.log(this.columnlist);
        this.getWhole();
      },
      (error) => {this.errorMessage = error; }
    );
  }

  getWhole(){
    this.getservice.getResponse(this.requestWholeURL).subscribe(
      (data: Resource[]) => {
        this.resourceList = data;
        // console.log(this.resourceList);
        this.displayservice.makeTable(this.columnlist,this.resourceList,this.wholeTable);
      },
      (error) => {this.errorMessage = error; }
    );
  }


}
