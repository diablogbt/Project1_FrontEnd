import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { GetRequestService } from '../service/get-request.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  userRequestURL = 'localhost:8080/Project1/user/profile';
  constructor(private request: GetRequestService) { }

  ngOnInit() {
  }

  getUser() {
  }
}
