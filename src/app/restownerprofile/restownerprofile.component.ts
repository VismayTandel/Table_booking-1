import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restownerprofile',
  templateUrl: './restownerprofile.component.html',
  styleUrls: ['./restownerprofile.component.css']
})
export class RestownerprofileComponent implements OnInit {

  restowner = {
    'restName':'Tamasha',
    'name':'vismay Vinodbhai Tandel'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
