import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/core/custom-services/app.service';
import { DatashareService } from '@app/core/custom-services/datashare.service';
import { AllmasterService } from '../allmaster.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'sa-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public inputTypeOne = "password";
  public inputTypeTwo = "password";
  public classNameOne = "glyphicon-eye-close";
  public classNameTwo = "glyphicon-eye-close";
  public loaderbtn: boolean = true;
  public user: any ={DesignationID:''};
  public designation: any;
  public empInfo: any;

  constructor(private allmasterService:AllmasterService,private appService: AppService, private datashare: DatashareService) { }

  ngOnInit() {
    this.datashare.GetSharedData.subscribe(data => this.user = data == null ? { IsActive: 'Y' } : data);
    this.appService.getAppData().subscribe(data => { this.empInfo = data });
    this.user.confirmpwd = this.user.Password;
    this.getDesignation();
  }

    //Password Hide/Show
    HideShowPasswordOne  () {
      if (this.inputTypeOne == 'password') {
          this.inputTypeOne = 'text';
          this.classNameOne = 'glyphicon-eye-open';
      }
      else {
          this.inputTypeOne = 'password';
          this.classNameOne = 'glyphicon-eye-close';
      }
  }
  
  HideShowPasswordTwo () {
      if (this.inputTypeTwo == 'password') {
          this.inputTypeTwo = 'text';
          this.classNameTwo = 'glyphicon-eye-open';
      }
      else {
          this.inputTypeTwo = 'password';
          this.classNameTwo = 'glyphicon-eye-close';
      }
  }

  getDesignation(){
    this.allmasterService.getDesignation().subscribe((resData: any) => {
      if (resData.StatusCode != 0) {
        this.designation = resData.Data;
      }else{
        this.designation = []; AppComponent.SmartAlert.Errmsg(resData.Message);
      }
    })
  }

  checkPass(){
    if(this.user.Password != this.user.confirmpwd){
      AppComponent.SmartAlert.Errmsg("New Password should be same as Confirm Password");
    }
  }
  onSubmit(){
        this.loaderbtn = false;
        this.user.Flag = this.user.UserCode == null ? 'IN' : 'UP';
        this.user.IsActive = 'Y';
        this.user.UserCode = this.empInfo.UserID;;
        this.user.UserName = this.user.FirstName +' '+ this.user.LastName;
        let ciphertext = this.appService.getEncrypted(this.user);
        this.allmasterService.post('ManageUser',ciphertext).subscribe((resData: any) => {
          this.loaderbtn = true;
          if (resData.StatusCode != 0) {
            AppComponent.SmartAlert.Success(resData.Message);
            AppComponent.Router.navigate(['/master/user-master']);
          }
          else { AppComponent.SmartAlert.Errmsg(resData.Message); }
        });
      }
      ngOnDestroy() {
        this.datashare.updateShareData(null);
      }
}
