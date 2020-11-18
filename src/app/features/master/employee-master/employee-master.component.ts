import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../../interface/igridoption';
import { AppComponent } from '../../../app.component';
import { DatashareService } from '../../../core/custom-services/datashare.service';
import { MasterService } from '../../../core/custom-services/master.service';
import { AppService } from '@app/core/custom-services/app.service';
import { AllmasterService } from '../allmaster.service';
@Component({
  selector: 'sa-employee-master',
  templateUrl: './employee-master.component.html',
  styleUrls: ['./employee-master.component.css']
})
export class EmployeeMasterComponent implements OnInit {
  public cpInfo: any;
  public designation: any = '';
  public designationData: any = [];
  public gridOptions: IGridoption;
  public empData: any = {};
  public empDataStored: any;
  public  loaderbtn:boolean=true;
  constructor(private appService: AppService, private datashare: DatashareService, private masterService: MasterService,private allmasterService:AllmasterService) {

  }
  ngOnInit() {
    this.appService.getAppData().subscribe(data => { this.cpInfo = data });
    this.configureGrid();
   // this.getDesignations();
  }
  configureGrid() {
    this.gridOptions = <IGridoption>{}
    this.gridOptions.exporterMenuPdf = false;
    this.gridOptions.selectionRowHeaderWidth = 0;
    this.gridOptions.exporterExcelFilename = 'Employee list.xlsx';
    let columnDefs = [];
    columnDefs = [
      {
        name: 'Select', displayName: 'Details', cellTemplate: '<button  style="margin:3px;" class="btn-primary btn-xs"  ng-click="grid.appScope.editEmployee(row.entity)"  ng-if="row.entity.IsActive!=null">&nbsp;Edit&nbsp;</button> '
        , width: "48", exporterSuppressExport: true,
        headerCellTemplate: '<div style="text-align: center;margin-top: 30px;">Edit</div>', enableFiltering: false
      },
      //{ name: 'EmpId', displayName: 'Emp ID', cellClass: 'cell-center', width: "*", cellTooltip: true, filterCellFiltered: true, visible: false },
      { name: 'FirstName', displayName: 'First Name', width: "180", cellTooltip: true, filterCellFiltered: true },
      { name: 'LastName', displayName: 'Last Name', width: "180", cellTooltip: true, filterCellFiltered: true },
      { name: 'DesigName', displayName: 'Designation', width: "150", cellTooltip: true, filterCellFiltered: true },
      { name: 'DeptName', displayName: 'Department',  width: "130", cellTooltip: true, filterCellFiltered: true },
      { name: 'Gender', displayName: 'Gender', width: "110", cellTooltip: true, filterCellFiltered: true, visible: false },
      { name: 'DateOfBirth', displayName: 'Date Of Birth', cellClass: 'cell-center', width: "130", cellTooltip: true, filterCellFiltered: true },
      { name: 'EmailId', displayName: 'Email Id', width: "250", cellTooltip: true, filterCellFiltered: true },
      { name: 'MobileNo', displayName: 'Mobile No.', cellClass: 'cell-center', width: "110", cellTooltip: true, filterCellFiltered: true },
      { name: 'AltMobileNo', displayName: 'Altr Mobile No.', cellClass: 'cell-center', width: "120", cellTooltip: true, filterCellFiltered: true },
      { name: 'BloodGroup', displayName: 'Blood Group', width: "120", cellTooltip: true, filterCellFiltered: true },
      { name: 'Education', displayName: 'Qualification', width: "130", cellTooltip: true, filterCellFiltered: true },
      { name: 'IsActive', displayName: 'Active', cellClass: 'cell-center', width: "90", cellTooltip: true, filterCellFiltered: true },
    ]
    this.gridOptions.columnDefs = columnDefs;
    this.onLoad();
  }
  onEditFunction = ($event) => {
    this.datashare.updateShareData($event.row);
    AppComponent.Router.navigate(['/master/employee']);
  }
  // getDesignations() {
  //   this.masterService.getDesignation(AppComponent.DeptId).subscribe((res: any) => {
  //     if (res.StatusCode != 0)
  //       this.designationData = res.Data;
  //     this.designationData.unshift({ RoleCode: "ALL", RoleDesc: "ALL" });
  //   });
  // }
  onLoad() {
    this.loaderbtn=false;
    this.allmasterService.getEmployees('').subscribe((resData: any) => {
      this.loaderbtn=true;
      if (resData.StatusCode != 0) {
        this.empData = resData.Data;  console.log(resData.Data);
        this.empDataStored = this.empData;
        AppComponent.SmartAlert.Success(resData.Message);
      }
      else { AppComponent.SmartAlert.Errmsg(resData.Message); this.empData = [{}]; }
    });
  }
  onSelectDesignation() {
    this.loaderbtn=false;
      this.empData = this.masterService.filterData(this.empDataStored, this.designation, 'RoleCode');
      this.empData = this.designation == 'ALL' ? this.empDataStored : this.empData;
    if (this.empData.length == 0)
     { this.empData = [{}]; AppComponent.SmartAlert.Errmsg('No Records Found');}
      this.loaderbtn=true;
    }
 
}