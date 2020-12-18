import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public loaderbtn: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
