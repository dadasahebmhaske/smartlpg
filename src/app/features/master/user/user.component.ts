import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public inputTypeOne = "password";
  public inputTypeTwo = "password";
  public classNameOne = "glyphicon-eye-close";
  public classNameTwo = "glyphicon-eye-close";
  public loaderbtn: boolean = true;
  public user: any ={};

  constructor() { }

  ngOnInit() {
  }

    //Password Hide/Show
    HideShowPasswordOne  () {
      if (this.inputTypeOne == 'password') {
          this.inputTypeOne = 'text';
          this.classNameOne = 'glyphicon-eye-open';
      }
      else {
          this.inputTypeOne = 'password';
          this.classNameOne = 'glyphicon-eye-close';
      }
  }
  
  HideShowPasswordTwo () {
      if (this.inputTypeTwo == 'password') {
          this.inputTypeTwo = 'text';
          this.classNameTwo = 'glyphicon-eye-open';
      }
      else {
          this.inputTypeTwo = 'password';
          this.classNameTwo = 'glyphicon-eye-close';
      }
  }

}
