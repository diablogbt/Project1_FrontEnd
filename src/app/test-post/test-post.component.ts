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

  requestURL = 'http://localhost:8080/Project1/test/getResList';

  sendPost() {
    let ulist = [{id: 1, uname: 'abcd', pass: 'nonon'},{id: 2, uname: 'cue', pass: 'finvc'}];
    let rlist = [{name: 'my my res2', cost_code: '00 00 +2', columns: [{0: "note", 1: "noway"},{0: "comment", 1: "tisalittletrouble"}]}];
    console.log(rlist);
    this.http.post(this.requestURL, rlist, {responseType: 'text'})
    .subscribe(
      (response: string) => {
        console.log(response);
      },
      error => console.log(error)
  );
  }
}
