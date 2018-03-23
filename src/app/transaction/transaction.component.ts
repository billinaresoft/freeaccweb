import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import {Accinterface} from "../Accinterface";
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [ServiceapiService]
})
export class TransactionComponent implements OnInit {
  TransactionRecords: any [];
  constructor(private apiSerivce: ServiceapiService) { }

  ngOnInit() {
    this.Transaction()
  }
  Transaction(): void {
    let url='api/TransactionGrid/TransactionGridAPI';
    let data1 = {
        "CompanyID": "1",
        "TransactionType": "1",
        "UserID": "1"
    }   
    this.apiSerivce.PostToserver(data1,url)
    .subscribe(data => {
      this.TransactionRecords = data['Table2']
     
    });
}
}
