import { Component } from '@angular/core';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1-fe';


  constructor(private requestservice: RequestService) { }

  ngOnInit(): void {
    this.requestservice.getResources();
  }
}
