import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RequestService } from '../service/request.service';
import { ProjectList } from '../Model/ProjectList';
import { GetRequestService } from '../service/get-request.service';

@Component({
  selector: 'app-project-selctor',
  templateUrl: './project-selctor.component.html',
  styleUrls: ['./project-selctor.component.css']
})
export class ProjectSelctorComponent implements OnInit {
  @Output() pidChange = new EventEmitter<ProjectList>();

  requestProjectURL = 'http://localhost:8080/Project1/project/display';
  projectList: ProjectList[];
  displayedProjectList: ProjectList[];
  selectedProject: ProjectList;

  constructor(private requestservice: RequestService) { }

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    // this.requestservice.get<ProjectList[]>(this.requestProjectURL, this.projectList);
    this.requestservice.get(this.requestProjectURL).subscribe(
      (data: ProjectList[]) => {
        this.projectList = data;
        this.displayedProjectList = data;
        this.displayedProjectList = this.displayedProjectList.filter(proj => proj.pid !== 0);
        console.log(this.displayedProjectList);
      }
    );
  }

  updateProjectId() {
    this.pidChange.emit(this.selectedProject);
  }
}
