import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AppComponent } from '../../../app.component';
import { AppService } from '@app/core/custom-services/app.service';
import * as CryptoJs from 'crypto-js';
import { MasterService } from '@app/core/custom-services/master.service';
//import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loaderbtn:boolean=true;
  public EmpInfo:any={};
  public state: any = {
    tabs: {
      demo1: 0,
  
    },

    carousel: {
      demo1: {
        interval: 2000,
        noWrap: false,
        slides: [
          {
            title: 'Title 1',
            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/banner.jpg',
          },
          {
            title: 'Title 2',
            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/banner.jpg',
          }
        ]
      }
    }
  };
  constructor(private router: Router,private authservice:AuthService,private appService:AppService,private masterService:MasterService) { }

  ngOnInit() {
  }
  login(event,form:NgForm){
    this.router.navigate(['/dashboard']); 
    // this.loaderbtn=false;
    // event.preventDefault();
    // if(!form.valid){
    //   return;
    // }
    // form.value.AppFlag='AD'
    // form.value.IsActive='Y';
    // let ciphertext = this.appService.getEncrypted(form.value);
    // this.authservice.logIn(ciphertext).subscribe(resData=>{
    //   this.loaderbtn=true;
    // if(resData.StatusCode==1) {     
    //   this.EmpInfo= resData.Data[0];
    // /// this.getNavMenu();
    //   this.appService.doEncryptionOf(resData.Data[0]);
    //      console.log(resData); 
    //     AppComponent.SmartAlert.bigBox({
    //       title: `Welcome  ${resData.Data[0].FirstName} ${resData.Data[0].LastName}`,
    //       content: "Logged in successfully!",
    //       color: "#296191",
    //       icon: "fa fa-thumbs-up animated bounce ",
    //       number: "1",
    //       timeout: 6000
    //     });
    //  //  this.router.navigate(['/dashboard']); 
    //     }
    //      else{
    //        AppComponent.SmartAlert.Errmsg(resData.Message);
    //      }
    //      },errorMessage=>{
    //     console.log(errorMessage);
     
    //   }
    //   );
  }
  getNavMenu(){
    let menu=[];
    this.masterService.getMenuAllMenu(this.EmpInfo.DesigId).subscribe((resMData: any) => {
      if (resMData.StatusCode != 0) { 
        for(let i=0;i<resMData.Data.Table.length;i++){
          if(resMData.Data.Table[i].IsAllocated=='Y')
          menu[i] = resMData.Data.Table[i].MenuFlag;
        }
        this.EmpInfo.Menu=menu;
        this.appService.doEncryptionOf(this.EmpInfo);
        this.router.navigate(['/dashboard']); 
      }
    });
   
  }


}
