import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-closing-stock',
  templateUrl: './closing-stock.component.html',
  styleUrls: ['./closing-stock.component.css']
})
export class ClosingStockComponent implements OnInit {

  constructor() { }
  public loaderbtn: boolean = true;
  public Cstock: any ={};
  ngOnInit() {
  }

}
