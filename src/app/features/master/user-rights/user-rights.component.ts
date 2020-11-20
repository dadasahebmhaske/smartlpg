import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.css']
})
export class UserRightsComponent implements OnInit {
  public loaderbtn: boolean = true;
  public Urts: any ={UserId:""};
  constructor() { }

  ngOnInit() {
  }

}
