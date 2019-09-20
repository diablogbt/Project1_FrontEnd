import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  pid = 1;

  constructor() { }

  ngOnInit() {
  }

  dealPidChange(pid: number) {
    this.pid = pid;
  }
}
