import { Component, OnInit } from '@angular/core';
import { ResourceList } from '../resource-page/ResourceList';
import { ServiceService } from '../resource-page/service.service';
import { MenuItem } from 'primeng/api';
import { DisplayService } from '../service/display.service';
// import { MessageService } from '../resource-page/message.service';

@Component ({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {

  constructor(private service: ServiceService, private displayservice: DisplayService) {

  }


  private items: MenuItem[];

  myResourceList: ResourceList[];
  // search part
  filteredResourceList: ResourceList[];
  filterwords: string;

  columnlist: string[] = ['name', 'cost_code'];

  errorMessage: string;

  requestResourceAll = 'http://localhost:8080/Project1/res/displayResources';

  // add Row
  newResource: boolean;

  displayTableAll() {
    this.service.getResourceList(this.requestResourceAll).subscribe(
      (data: ResourceList[]) => {
        this.myResourceList = data;
        this.filteredResourceList = data;
        console.log(this.columnlist);
      },
      (error) => this.errorMessage = error
    );
  }

  // getResourceList():void{
  //   this.service.getResourceList().subscribe(data => this.myResourceList = data);
  // }

  ngOnInit() {
    this.displayTableAll();

    this.items = [
      {label: 'Add Row', icon: 'pi pi-align-left'},
      {label: 'Add Column', icon: 'pi pi-table'},
      {label: 'Import CSV', icon: 'pi pi-file-excel'},
    ];
  }

  filter(){
    this.filteredResourceList =
      this.displayservice.filterByKeyWord(this.myResourceList, this.filterwords);
  }

}
