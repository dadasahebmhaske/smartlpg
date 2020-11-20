import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  public loaderbtn: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
