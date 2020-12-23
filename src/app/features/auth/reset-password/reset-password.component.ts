import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { AppService } from '@app/core/custom-services/app.service';
import * as CryptoJs from 'crypto-js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sa-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public inputTypeZero = 'password';
  public classNameZero = 'glyphicon-eye-close';
  public inputTypeOne = "password";
  public classNameOne = "glyphicon-eye-close";
  public loaderbtn: boolean = true;
  public reset: any ={};
  public toEncData;
  public loadersuccess=false;loader=false;getuserparams:any;
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
  constructor(private route:ActivatedRoute,private appService: AppService,private authservice:AuthService,) { }

  ngOnInit() {
    this.getuserparams = this.route.snapshot.queryParamMap.get('data');
    var decrypted = CryptoJs.AES.decrypt(this.getuserparams, AppComponent.secureKey, { iv: AppComponent.secureKey });
    //var decrypted = CryptoJS.AES.decrypt(this.getuserparams, rootScope1,{iv:rootScope1});
    var decr=decrypted.toString(CryptoJs.enc.Utf8);
    var splitstr = decr.split('=');
    if (splitstr.length > 0) {
      var postdata = {
          UserID: splitstr[1],
      };
      this.toEncData = JSON.stringify(postdata);
      this.onSubmit();
     }
  }
  HideShowPasswordZero() {
    if (this.inputTypeZero == 'password') {
      this.inputTypeZero = 'text';
      this.classNameZero = 'glyphicon-eye-open';
    }
    else {
      this.inputTypeZero = 'password';
      this.classNameZero = 'glyphicon-eye-close';
    }
  };
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

    onSubmit(){
      this.reset.UserID = this.toEncData.UserID;
      this.reset.Password = this.reset.Password;
      this.reset.Flag = 'UP';
      let ciphertext = this.appService.getEncrypted(this.reset);
      this.authservice.Reset('ManageUser',ciphertext).subscribe((resData: any) => {
        this.loaderbtn = true;
        if (resData.StatusCode != 0) {
          AppComponent.SmartAlert.Success(resData.Message);
          AppComponent.Router.navigate(['/auth/login']);
        }
        else { AppComponent.SmartAlert.Errmsg(resData.Message); }
      });
    }
}
