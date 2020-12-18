import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public loaderbtn: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
