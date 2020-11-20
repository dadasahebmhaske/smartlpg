import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
import { AppComponent } from '../../../app.component';
import { DatashareService } from '../../../core/custom-services/datashare.service';
import { MasterService } from '../../../core/custom-services/master.service';
import { AppService } from '@app/core/custom-services/app.service';
import { AllmasterService } from '../allmaster.service';

@Component({
  selector: 'sa-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public loaderbtn: boolean = true;
  public account: any ={};
  constructor() {

  }
  ngOnInit() {
  
  }
  onSubmit(){}
 

}
