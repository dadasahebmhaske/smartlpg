import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-deliveryman',
  templateUrl: './deliveryman.component.html',
  styleUrls: ['./deliveryman.component.css']
})
export class DeliverymanComponent implements OnInit {

  constructor() { }
  
  public  loaderbtn:boolean=true;
  public dman:any={};

  ngOnInit() {
  }

}
