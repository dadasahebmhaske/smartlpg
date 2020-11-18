import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatashareService } from '../../../core/custom-services/datashare.service';
import { AppComponent } from '../../../app.component';
import { AppService } from '@app/core/custom-services/app.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AllmasterService } from '@app/features/master/allmaster.service';
import { ProjectService } from '../project.service';
@Component({
  selector: 'sa-wc-payment-details',
  templateUrl: './wc-payment-details.component.html',
  styleUrls: ['./wc-payment-details.component.css']
})
export class WcPaymentDetailsComponent implements OnInit, OnDestroy {
  public empInfo: any;
  public datePickerConfig: Partial<BsDatepickerConfig>;
  public project: any = {};
  public loaderbtn: boolean = true;editflag;
  public InvoiceData: any = []; InvoiceArray: any[]; MaterialArray: any = []; ProjectData: any; SiteData: any = []; TranExists: any = [];
  public VendorData: any = [];invoiceamount:any;
  constructor(private appService: AppService, private datashare: DatashareService, private allmasterService: AllmasterService, private projectService: ProjectService) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-orange', maxDate: new Date(), dateInputFormat: 'DD-MMM-YYYY', showWeekNumbers: false, adaptivePosition: true, isAnimated: true });
  }
  ngOnInit() {
    this.getAllonload();
    this.datashare.GetSharedData.subscribe(data => {
      this.project = data == null ? { IsActive: 'Y', SiteId: '', ProjectId: '', VendorId: '', RefTranNo: '',PayMode:'' } : data;
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
    this.projectService.getWCInvoiceDeatils(tranNo, this.project.ProjectId, RefTranNo).subscribe((resData: any) => {
      if (resData.StatusCode != 0) {
        console.log(resData);
        if (RefTranNo == '') {
          this.VendorData = resData.Data.Table1;
          this.InvoiceData = resData.Data.Table2;
          this.project.VendorId='';
          this.InvoiceData.length==0?this.InvoiceArray=[]:this.onSelectVendor();
          if(this.project.TranNo!=null){
            this.onSelectVendor();  
        //this.onSelectInvoice(); 
          }
        } else {
          if(this.editflag=='E'){
            this.VendorData = resData.Data.Table1;
            this.InvoiceData = resData.Data.Table2;
            if (this.project.TranNo != null) {
              this.onSelectVendor();
              this.onSelectInvoice(); 
            }
            this.editflag=='z';
            }else{
              this.MaterialArray = resData.Data.Table;
            }

         
          let tempArray = [];
          for (let i = 0; i < this.MaterialArray.length; i++) {
            let Material = this.MaterialArray[i];
            Material.show = tempArray.some(obj => parseInt(obj.TypeId) === parseInt(Material.TypeId)) ? false : true;
                      tempArray.push(Material);
          }
          this.MaterialArray = tempArray;
          this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);
          }
      }
      else { RefTranNo == '' ? (this.VendorData = this.InvoiceData = []) : this.MaterialArray = []; AppComponent.SmartAlert.Errmsg(resData.Message); }
    });
  }
  public getTranData() {
    this.editflag='E';
    this.projectService.getTransDetails(111, this.project.TranNo).subscribe((resTran: any) => {
      if (resTran.StatusCode != 0) { 
        this.TranExists = resTran.Data.Table;
       this.project = resTran.Data.Table1[0];
       this.MaterialArray = resTran.Data.Table2;
        this.onSelectSite();
       // this.onSelectProject('');
       this.onSelectProject(this.project.RefTranNo);
        this.onSelectVendor();  
        //this.onSelectInvoice();    
       
  
            }
    });
  }
  onSelectVendor() {
    this.InvoiceArray = this.projectService.filterData(this.InvoiceData, this.project.VendorId, 'VendorId');
  }

  onQtyDueAmount(mat,index) {
    if (parseInt(this.MaterialArray[index].DueAmount) > parseInt(this.MaterialArray[index].RemainAmount)) {
      AppComponent.SmartAlert.Errmsg(`Pending amount should not be greater than ${this.MaterialArray[index].RemainAmount}`);
      this.MaterialArray[index].DueAmount = null;
    }
    this.project = this.projectService.calculatePOTotal(this.project, this.MaterialArray);

   
  }

  onSelectInvoice(){
    if(this.project.TranNo==null || this.project.TranNo==''){
    let obj;
    obj = this.projectService.filterData(this.InvoiceArray, this.project.RefTranNo, 'TranNo');
    this.project.InvoiceDate=obj[0].InvoiceDate;
    this.project.VendorInvoiceNo=obj[0].VendorInvoiceNo;
    this.project.TotAmount=obj[0].TotAmount;
    this.invoiceamount=this.project.TotAmount;
  }
  }
  public onSubmit() {
    if(parseInt(this.project.TotAmount)!=parseInt(this.project.TotalDeuAmount)){
      AppComponent.SmartAlert.Errmsg("Payment amount should be equal to pending amount");
    }
    else{
    if(parseInt(this.project.TotAmount) > parseInt(this.invoiceamount)){
      AppComponent.SmartAlert.Errmsg("Payment Amount should be less than invoice amount");
    }
    else{
    this.loaderbtn = false;
    this.project.Flag = this.project.TranNo == null || this.project.TranNo == '' ? 'IN' : 'UP';
    this.project.UserCode = this.empInfo.EmpId;
    this.project.TranNo = this.project.TranNo == null ? '' : this.project.TranNo;
    this.project.TranSubType = 1;
    this.project.TranType = 111;
    this.project.TranDate = new Date();
    //this.project.ChallanDate= this.appService.DateToString(this.project.ChallanDate);
    //this.project.Remark = '';
    let Data=[];
    for(let i=0;i<this.MaterialArray.length;i++){
     if(parseInt(this.MaterialArray[i].DueAmount)>0){
       Data.push({
        
      TypeId:this.MaterialArray[i].TypeId,
      MatActExpId:this.MaterialArray[i].WorkId,
      UOMId:this.MaterialArray[i].UOMId,
      Qty:this.MaterialArray[i].Qty,
      Rate:this.MaterialArray[i].Rate,
      Amount:this.MaterialArray[i].DueAmount,
      CGST:this.MaterialArray[i].CGST,
      SGST:this.MaterialArray[i].SGST,
      IGST:this.MaterialArray[i].IGST,
      RefTranNo:this.MaterialArray[i].RefTranNo,
      RefSrNo:this.MaterialArray[i].RefSrNo,

       })
     }
    }
    this.project.Data = Data;
    let ciphertext = this.appService.getEncrypted(this.project);
    this.projectService.post('ManageWorkContractPayment', ciphertext).subscribe((resData: any) => {
      this.loaderbtn = true;
      if (resData.StatusCode != 0) {
        AppComponent.SmartAlert.Success(resData.Message);
        AppComponent.Router.navigate(['/project/wc-payment-details-list']);
      }
      else { AppComponent.SmartAlert.Errmsg(resData.Message); }
    });
  }
}
}
  ngOnDestroy() {
    this.datashare.updateShareData(null);
  }

}
