import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import {Accinterface} from "../Accinterface";
import { RouterModule, Router } from '@angular/router';
import { AlertService } from '../_services/index';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ServiceapiService]
})
export class WelcomeComponent implements OnInit {
  Companyrecords: any [];
 
  LogoURL='http://www.vkoilmill.com/testaccountswebapi/UploadFiles/CompanyLogo/'
  constructor(private alertService: AlertService,private apiSerivce: ServiceapiService,public router: Router, public spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.activepage()
    this.spinnerService.show();
    this.OwnCompanyRights()
  
  }
  activepage(){
    $('#welcomepage').css('background-color', 'red');
 
  }
  OwnCompanyRights(): void {
    let url='api/GetAssignCompanyUser/GetAssignCompanyUserAPI';
    let data1 = {
        "UserID": "1"
    }   
    this.apiSerivce.PostToserver(data1,url)
    .subscribe(data => {
      this.Companyrecords = data['Table']
      this.spinnerService.hide();
    });
}
}
