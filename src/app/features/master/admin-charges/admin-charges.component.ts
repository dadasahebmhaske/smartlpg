import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-admin-charges',
  templateUrl: './admin-charges.component.html',
  styleUrls: ['./admin-charges.component.css']
})
export class AdminChargesComponent implements OnInit {
  public loaderbtn: boolean = true;
  public adm: any ={};
  constructor() { }

  ngOnInit() {
  }

}
