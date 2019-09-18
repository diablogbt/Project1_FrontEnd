import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { ProjectList } from '../Model/ProjectList';
import { GetRequestService } from '../service/get-request.service';

@Component({
  selector: 'app-project-selctor',
  templateUrl: './project-selctor.component.html',
  // styleUrls: ['./project-selctor.component.css']
})
export class ProjectSelctorComponent implements OnInit {

  requestProjectURL = 'http://localhost:8080/Project1/project/display';
  projectList: ProjectList[];
  selectedProject: ProjectList;

  constructor(private requestservice: RequestService) { }

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    // this.requestservice.get<ProjectList[]>(this.requestProjectURL, this.projectList);
    this.requestservice.get(this.requestProjectURL).subscribe(
      (data: ProjectList[]) => {this.projectList = data; }
    );
  }

}
