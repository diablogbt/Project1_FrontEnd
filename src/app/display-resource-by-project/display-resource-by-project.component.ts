import { Component, OnInit } from '@angular/core';
import { Resource } from '../Model/Resource';
import { GetRequestService } from '../service/get-request.service';

@Component({
  selector: 'app-display-resource-by-project',
  templateUrl: './display-resource-by-project.component.html',
  styleUrls: ['./display-resource-by-project.component.css']
})
export class DisplayResourceByProjectComponent implements OnInit {

  constructor(private getservice: GetRequestService) { }

  resourceListByProject: Resource[];
  requestResourceByProjectURL = 'http://localhost:8080/Project1/res/displayByProjectId/';

  errorMessage: string;
  columnlist: string[] = ['cost_code', 'name'];
  id = 1;

  ngOnInit() {
  }

  displayTableByProject(id?: number) {
    if (id === undefined) { id = this.id; }
    this.getservice.getResponse(this.requestResourceByProjectURL + '/' + id).subscribe(
      (data: Resource[]) => {
        this.resourceListByProject = data;
      },
      (error) => this.errorMessage = error
    );
  }

}
