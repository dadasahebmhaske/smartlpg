import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-item-categories',
  templateUrl: './item-categories.component.html',
  styleUrls: ['./item-categories.component.css']
})
export class ItemCategoriesComponent implements OnInit {
  public loaderbtn: boolean = true;
  public Catitem: any ={};
  constructor() { }

  ngOnInit() {
  }

}
