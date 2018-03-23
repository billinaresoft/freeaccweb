import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import {Accinterface} from "../Accinterface";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [ServiceapiService]
})
export class CompanyComponent implements OnInit {
  Companyrecords: any [];
  constructor(private apiSerivce: ServiceapiService) { }

  ngOnInit() {
    this.CompanyGrids()
  }
  CompanyGrids(): void {
    let url='api/GridbindCompany/GridbindCompanyAPI';
    let data1 = {
        "UserID": "1"
    }   
    this.apiSerivce.PostToserver(data1,url)
    .subscribe(data => {
      this.Companyrecords = data['Table']
     
    });
}
}
