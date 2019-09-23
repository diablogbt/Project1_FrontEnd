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
    let ulist = [{id: 1, uname: 'abcd', pass: 'nonon'},{id: 2, uname: 'cue', pass: 'finvc'}];
    console.log(ulist);
    this.http.post(this.requestURL, ulist, {responseType: 'text'})
    .subscribe(
      (response: string) => {
        console.log(response);
      },
      error => console.log(error)
  );
  }
}
