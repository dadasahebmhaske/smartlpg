import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public loaderbtn: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
