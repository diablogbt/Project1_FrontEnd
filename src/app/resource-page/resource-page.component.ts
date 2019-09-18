import { Component, OnInit } from '@angular/core';
import { ResourceList } from '../resource-page/ResourceList';
import { ServiceService } from '../resource-page/service.service';
import { MenuItem } from 'primeng/api';
// import { MessageService } from '../resource-page/message.service';

@Component ({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {

  constructor(private service: ServiceService) {

  }


  private items: MenuItem[];

  myResourceList: ResourceList[];
  // search part
  filteredResourceList: ResourceList[];
  filterwords: string;

  columnlist: string[] = ['name', 'cost_code'];

  errorMessage: string;

  requestResourceAll = 'http://192.168.1.182:8080/Project1/res/displayResources';

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

  filterByKeyWord() {
    if (!this.filterwords || this.filterwords.replace(/\s/g, '') === '') {
      this.filteredResourceList = this.myResourceList;
    } else {
      this.filteredResourceList = [];
      for (let resSearch of this.myResourceList) {
        if (resSearch.cost_code.search(this.filterwords) >= 0 ||
          resSearch.name.search(this.filterwords) >= 0) {
          this.filteredResourceList.push(resSearch);
        }
      }
    }
  }
}
