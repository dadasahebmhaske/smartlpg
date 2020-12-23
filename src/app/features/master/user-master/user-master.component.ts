import { Component, OnInit } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { AppService } from '@app/core/custom-services/app.service';
import { DatashareService } from '@app/core/custom-services/datashare.service';
import { MasterService } from '@app/core/custom-services/master.service';
import { IGridoption } from '@app/interface/igridoption';
import { AllmasterService } from '../allmaster.service';

@Component({
  selector: 'sa-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
  public gridOptions: IGridoption;
  public userData: any = {};
  public  loaderbtn:boolean=true;
  public cpInfo: any;
  public userDataStored: any;
  constructor(private appService: AppService, private datashare: DatashareService,private masterService: MasterService,private allmasterService:AllmasterService) { }

  ngOnInit() {
    this.appService.getAppData().subscribe(data => { this.cpInfo = data });
    this.configureGrid();
  }

  configureGrid() {
    this.gridOptions = <IGridoption>{}
    this.gridOptions.exporterMenuPdf = false;
    this.gridOptions.selectionRowHeaderWidth = 0;
    this.gridOptions.exporterExcelFilename = 'User List.xlsx';
    let columnDefs = [];
    columnDefs = [
      {
        name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  ng-if="row.entity.IsActive!=null">&nbsp;Edit&nbsp;</button> '
        , width: "48", exporterSuppressExport: true,
        headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
      },
      // {
      //   name: 'Edit', displayName: 'Edit', 
      //   cellTemplate: `<button ng-if="row.entity.IsActive=='Y'" class="btn-primary btn-xs" style="margin:2px 11px;" ng-click="grid.appScope.editEmployee(row.entity)" data-title=""><i class="fa fa-pencil-square-o"></i></button>`
      // , width: '48', headerCellTemplate: '<div style="text-align: center;margin-top: 22px;"></div>', enableFiltering: false 
      // },
      { name: 'Designation', displayName: 'Designation', width: "*", cellTooltip: true, filterCellFiltered: true },
      { name: 'FirstName', displayName: 'First Name', width: "*", cellTooltip: true, filterCellFiltered: true },
      { name: 'LastName', displayName: 'Last Name', width: "*", cellTooltip: true, filterCellFiltered: true },
      { name: 'Mobile', displayName: 'Mobile Number', cellClass: 'cell-right', width: "*", cellTooltip: true, filterCellFiltered: true },
      { name: 'Email', displayName: 'Email Id', width: "*", cellTooltip: true, filterCellFiltered: true },
      // { name: 'AltMobileNo', displayName: 'Altr Mobile No.', cellClass: 'cell-center', width: "120", cellTooltip: true, filterCellFiltered: true },
      // { name: 'BloodGroup', displayName: 'Blood Group', width: "120", cellTooltip: true, filterCellFiltered: true },
      // { name: 'Education', displayName: 'Qualification', width: "130", cellTooltip: true, filterCellFiltered: true },
      // { name: 'IsActive', displayName: 'Active', cellClass: 'cell-center', width: "90", cellTooltip: true, filterCellFiltered: true },
    ]
    this.gridOptions.columnDefs = columnDefs;
    this.onLoad();
  }

  onEditFunction = ($event) => {
    this.datashare.updateShareData($event.row);
    AppComponent.Router.navigate(['/master/user']);
  }

  onLoad() {
    this.loaderbtn=false;
    this.allmasterService.getUsers().subscribe((resData: any) => {
      this.loaderbtn=true;
      if (resData.StatusCode != 0) {
        this.userData = resData.Data;  console.log(resData.Data);
        this.userDataStored = this.userData;
        AppComponent.SmartAlert.Success(resData.Message);
      }
      else { AppComponent.SmartAlert.Errmsg(resData.Message); this.userData = [{}]; }
    });
  }
  // ngOnDestroy() {
  //   this.datashare.updateShareData(null);
  // }
  // onSelectDesignation() {
  //   this.loaderbtn=false;
  //     //this.userData = this.masterService.filterData(this.userDataStored, this.designation, 'RoleCode');
  //     //this.userData = this.designation == 'ALL' ? this.userDataStored : this.userData;
  //   if (this.userData.length == 0)
  //    { this.userData = [{}]; AppComponent.SmartAlert.Errmsg('No Records Found');}
  //     this.loaderbtn=true;
  //   }

}
