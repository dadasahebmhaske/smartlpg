import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public loaderbtn: boolean = true;
  public item: any ={};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
}
