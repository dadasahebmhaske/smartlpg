import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public  loaderbtn:boolean=true;
  public group:any={};

  constructor() { }


  ngOnInit() {
  }

}
