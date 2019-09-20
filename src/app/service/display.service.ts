import { Injectable } from '@angular/core';
import { ResourceList } from '../resource-page/ResourceList';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  makeTable(columnlist, resourceList, displayResult){
    for(let row of resourceList){
      let rowcnt: object[] = [];
      for(let columnname of columnlist){
        rowcnt.push({columnname: ''});
      }

      rowcnt['cost_code'] = row.cost_code;
      rowcnt['name'] = row.name;

      for(let columnpair of row.columns){
        rowcnt[columnpair[0]] = columnpair[1];
      }

      displayResult.push(rowcnt);
    }
  }

  filterByKeyWord(myResourceList: ResourceList[], filterwords?: string) {
    let filteredResourceList: ResourceList[] = [];
    if (!filterwords || filterwords.replace(/\s/g, '') === '') {
      filteredResourceList = myResourceList;
    } else {
      for (let resSearch of myResourceList) {
        if (resSearch.cost_code.search(filterwords) >= 0 ||
          resSearch.name.search(filterwords) >= 0) {
          filteredResourceList.push(resSearch);
        }
      }
    }
    return filteredResourceList;
  }
}
