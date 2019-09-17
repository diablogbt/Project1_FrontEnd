import { Component, OnInit } from '@angular/core';
import { GetRequestService} from '../service/get-request.service';
import { User } from '../Model/User';
import { Resource } from '../Model/Resource';

@Component({
  selector: 'app-get-resource-request',
  templateUrl: './get-resource-request.component.html',
  styleUrls: ['./get-resource-request.component.css']
})
export class GetResourceRequestComponent implements OnInit {
  constructor(private getservice: GetRequestService) { }

  // id = 1;
  // userlist: User[];
  resourceList: Resource[];
  errorMessage: string;
  configURL = 'http://localhost:8080/Project1/res/displayResources';

  ngOnInit(): void { }

  handleResource()  {
    this.getservice.getResponse(this.configURL).subscribe(
      (data: Resource[]) => {this.resourceList = data; console.log(this.resourceList); },
      (error) => {this.errorMessage = error; }
    );
  }
}
