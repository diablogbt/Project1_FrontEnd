import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-post',
  templateUrl: './test-post.component.html',
  styleUrls: ['./test-post.component.css']
})
export class TestPostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  requestURL = 'http://localhost:8080/Project1/test/getList';

  sendPost() {
    let
    this.http.post(this.requestURL, this.uname, {responseType: 'json'})
    .subscribe(
      (response: string) => {
        console.log(response);
      },
      error => console.log(error)
  );
  }
}
