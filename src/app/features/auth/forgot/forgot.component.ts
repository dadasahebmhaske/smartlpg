import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AppService } from '@app/core/custom-services/app.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit {
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
  constructor(private router: Router,private appService:AppService,private authservice:AuthService) { }

  ngOnInit() {
  }

  submit(event,form:NgForm){
    event.preventDefault();
    if(!form.valid){
      return;
    }
    let ciphertext = this.appService.getEncrypted(form.value);
    this.authservice.Forgot('UserForgotPassword',ciphertext).subscribe((resData: any) => {
    if(resData.StatusCode==1) {   
      AppComponent.SmartAlert.Success(resData.Message);  
      this.router.navigate(['/auth/login']);
    }
  });
  }
  
}
