import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();
  uname = 'abc';

  requestoption = {headers: new HttpHeaders(
    {contentType: 'text/plain', responseType: 'JSON'}
    )};

  userRequestURL = 'http://localhost:8080/Project1/user/profile';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.post<User>(this.userRequestURL, this.uname, {responseType: 'json'})
      .subscribe(
        (response: User) => {
          this.user = response;
          console.log(this.user);
        },
        error => console.log(error)
    );
  }
}
