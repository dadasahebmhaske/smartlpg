import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatashareService } from '../../../core/custom-services/datashare.service';
import { AppComponent } from '../../../app.component';
import { AppService } from '@app/core/custom-services/app.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AllmasterService } from '@app/features/master/allmaster.service';
import { ProjectService } from '../project.service';
@Component({
  selector: 'sa-m-invoice-details',
  templateUrl: './m-invoice-details.component.html',
  styleUrls: ['./m-invoice-details.component.css']
})
export class MInvoiceDetailsComponent implements OnInit, OnDestroy {
  public empInfo: any;
  public datePickerConfig: Partial<BsDatepickerConfig>;
  public project: any = {};
  public loaderbtn: boolean = true;editflag;
  public GRNData: any = []; GRNArray: any[]; MaterialArray: any = []; ProjectData: any; SiteData: any = []; TranExists: any = [];
  public VendorData: any = [];
  constructor(private appService: AppService, private datashare: DatashareService, private allmasterService: AllmasterService, private projectService: ProjectService) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-orange', maxDate: new Date(), dateInputFormat: 'DD-MMM-YYYY', showWeekNumbers: false, adaptivePosition: true, isAnimated: true });
  }
  ngOnInit() {
    this.getAllonload();
    this.datashare.GetSharedData.subscribe(data => {
      this.project = data == null ? { IsActive: 'Y', SiteId: '', ProjectId: '', VendorId: '', RefTranNo: '' } : data;
      if (this.project.TranNo != null)
       this.getTranData();
    }); this.appService.getAppData().subscribe(data => { this.empInfo = data });
  }
  public getAllonload() {
    this.allmasterService.getSite('Y').subscribe((resSData: any) => {
      if (resSData.StatusCode != 0) {
        this.SiteData = resSData.Data; 
      }
      else { this.SiteData = []; AppComponent.SmartAlert.Errmsg(resSData.Message); }
    });
  }
  public onSelectSite() {
    this.projectService.getProject(this.project.SiteId).subscribe((resSData: any) => {
      if (resSData.StatusCode != 0) {
        this.ProjectData = resSData.Data;
      }
      else { this.ProjectData = []; AppComponent.SmartAlert.Errmsg(resSData.Message); }
    });
  }
  public onSelectProject(RefTranNo) {
    if(this.project.TranNo==null){
      this.MaterialArray=[];
      this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
    }
    let tranNo = this.project.TranNo == null ? '' : this.project.TranNo;
    this.projectService.getGRNDeatils(tranNo, this.project.ProjectId, RefTranNo).subscribe((resData: any) => {
      if (resData.StatusCode != 0) {
        console.log(resData);
        if (RefTranNo == '') {
          this.VendorData = resData.Data.Table1;
          this.GRNData = resData.Data.Table2;
          this.project.VendorId='';
          this.GRNData.length==0?this.GRNArray=[]:this.onSelectVendor();
          if(this.project.TranNo!=null){
            this.onSelectVendor(); 
          }
        } else {
          if(this.editflag=='E'){
            this.VendorData = resData.Data.Table1;
            this.GRNData = resData.Data.Table2;
            if (this.project.TranNo != null) {
              this.onSelectVendor();
            }
            this.editflag=='z';
            }else{
              this.MaterialArray = resData.Data.Table;
              // this.AMTypeData = resData.Data.Table;
              // this.AMData = resData.Data.Table1;
            }
          
          let tempArray = [];
          for (let i = 0; i < this.MaterialArray.length; i++) {
            let Material = this.MaterialArray[i];          
            Material.show = tempArray.some(obj => parseInt(obj.TypeId) === parseInt(Material.TypeId)) ? false : true;
            tempArray.push(Material);
            this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
          }
          this.MaterialArray=tempArray;
        }
      }
      else { RefTranNo == '' ? (this.VendorData = this.GRNData = this.GRNArray=[]) : this.MaterialArray = []; AppComponent.SmartAlert.Errmsg(resData.Message); }
    });
  }
  public getTranData() {
    this.editflag='E';
    this.projectService.getTransDetails(105, this.project.TranNo).subscribe((resTran: any) => {
      if (resTran.StatusCode != 0) {
        this.TranExists = resTran.Data.Table;
       this.project = resTran.Data.Table1[0];
        this.onSelectSite();
        this.onSelectProject(this.project.RefTranNo);
        this.onSelectVendor();      
        this.MaterialArray = resTran.Data.Table2;
        let tempArray = [];
        for (let i = 0; i < this.MaterialArray.length; i++) {
          let Material = this.MaterialArray[i];
          Material.show = tempArray.some(obj => parseInt(obj.TypeId) === parseInt(Material.TypeId)) ? false : true;
                    tempArray.push(Material);
        }
        this.MaterialArray = tempArray;
        this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
            }
    });
  }
  onSelectVendor() {
    this.GRNArray = this.projectService.filterData(this.GRNData, this.project.VendorId, 'VendorId');
  }
  onRemoveMaterial(data, index) {
    this.MaterialArray.splice(index, 1);
    this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
  }
  public onQtyChange(mat, ind) {
    console.log(mat);
    console.log(this.MaterialArray);
    if (parseInt(mat.Qty) <= 0) {
      AppComponent.SmartAlert.Errmsg(`Quantity should be grater than 0`);
      this.MaterialArray[ind].Qty = 1;
    } else if (parseInt(mat.Qty) > parseInt(mat.RemainBudgetQty)) {
      AppComponent.SmartAlert.Errmsg(`Quantity exceeded the GRN quantity`);
      this.MaterialArray[ind].Qty = parseInt(mat.RemainBudgetQty);
    } 
      this.MaterialArray[ind].Qty = mat.Qty;
      this.MaterialArray[ind].Amount = parseFloat(this.MaterialArray[ind].Rate) * parseFloat(this.MaterialArray[ind].Qty);
      this.MaterialArray[ind].Amount = (this.MaterialArray[ind].Amount).toFixed(2);
      if (this.MaterialArray[ind].IGST == 0 || this.MaterialArray[ind].IGST == null) {
        this.MaterialArray[ind].CGSTAmount = 0;
        this.MaterialArray[ind].SGSTAmount = 0;
        this.MaterialArray[ind].CGSTAmount = (parseFloat(this.MaterialArray[ind].Amount) * parseFloat(this.MaterialArray[ind].CGST)) / 100;
        this.MaterialArray[ind].CGSTAmount = (this.MaterialArray[ind].CGSTAmount).toFixed(2);
        this.MaterialArray[ind].SGSTAmount = (parseFloat(this.MaterialArray[ind].Amount) * parseFloat(this.MaterialArray[ind].SGST)) / 100;
        this.MaterialArray[ind].SGSTAmount = (this.MaterialArray[ind].SGSTAmount).toFixed(2);
        this.MaterialArray[ind].TotalAmount = parseFloat(this.MaterialArray[ind].Amount) + parseFloat(this.MaterialArray[ind].CGSTAmount) + parseFloat(this.MaterialArray[ind].SGSTAmount);
      }
      else {
        this.MaterialArray[ind].IGSTAmount = 0;
        this.MaterialArray[ind].IGSTAmount = (parseFloat(this.MaterialArray[ind].Amount) * parseFloat(this.MaterialArray[ind].IGST)) / 100;
        this.MaterialArray[ind].IGSTAmount = (this.MaterialArray[ind].IGSTAmount).toFixed(2);
        this.MaterialArray[ind].TotalAmount = parseFloat(this.MaterialArray[ind].Amount) + parseFloat(this.MaterialArray[ind].IGSTAmount);
      }
      this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
    

  }
  public onSubmit() {
    this.loaderbtn = false;
    this.project.Flag = this.project.TranNo == null || this.project.TranNo == '' ? 'IN' : 'UP';
    this.project.UserCode = this.empInfo.EmpId;
    this.project.TranNo = this.project.TranNo == null ? '' : this.project.TranNo;
    this.project.TranSubType = 1;
    this.project.TranType = 105;
    this.project.TranDate = new Date();
    //this.project.ChallanDate= this.appService.DateToString(this.project.ChallanDate);
    //this.project.Remark = '';
    this.project.Data = this.MaterialArray;
    let ciphertext = this.appService.getEncrypted(this.project);
    this.projectService.post('ManageInvoice', ciphertext).subscribe((resData: any) => {
      this.loaderbtn = true;
      if (resData.StatusCode != 0) {
        AppComponent.SmartAlert.Success(resData.Message);
        AppComponent.Router.navigate(['/project/m-invoice-details-list']);
      }
      else { AppComponent.SmartAlert.Errmsg(resData.Message); }
    });
  }

  ngOnDestroy() {
    this.datashare.updateShareData(null);
  }

}
