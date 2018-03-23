import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import { Accinterface } from "../Accinterface";
import { RouterModule, Router } from '@angular/router';
import { AlertService } from '../_services/index';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [ServiceapiService]
})
export class CustomerComponent implements OnInit {
  name:string;  
  LogoURL='http://www.vkoilmill.com/testaccountswebapi/UploadFiles/CompanyLogo/'
  constructor(private alertService: AlertService,private apiSerivce: ServiceapiService,public router: Router, public spinnerService: Ng4LoadingSpinnerService) { }
  CutomerGridRecords: any[];
  
  ngOnInit() {
    this.activepage()
  this.spinnerService.show();
    this.gridCustomer()    
  }
  gridCustomer(): void {
    let url = 'api/CustomerGrid/CustomerGridAPI/';
    let data1 = {
      "CompanyID": "1"
    }
    this.apiSerivce.PostToserver(data1, url)
      .subscribe(data => {
        this.CutomerGridRecords = data['Table']
        this.spinnerService.hide();
      });
      
  }
  customerEditDelete(CustomerID,Flag){
    this.router.navigate(['/addcustomer'], { queryParams: { CustomerID: CustomerID ,Flag:Flag} });    
  }
  activepage(){
    $('#customerpage').css('background-color', 'red');
 
  }

}
