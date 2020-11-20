import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-taluka',
  templateUrl: './taluka.component.html',
  styleUrls: ['./taluka.component.css']
})
export class TalukaComponent implements OnInit {
  public loaderbtn: boolean = true;
  public item: any ={};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
}
