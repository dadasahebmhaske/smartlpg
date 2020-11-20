import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-godown',
  templateUrl: './godown.component.html',
  styleUrls: ['./godown.component.css']
})
export class GodownComponent implements OnInit {
  public loaderbtn: boolean = true;
  public godown: any ={};
  constructor() { }

  ngOnInit() {
  }

}
