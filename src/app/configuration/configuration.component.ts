import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import { Accinterface } from "../Accinterface";
import { FormGroup,NgForm,   FormBuilder,    Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers: [ServiceapiService]
})
export class ConfigurationComponent implements OnInit {
  form: FormGroup;
  ConfigurationRecords: any [];
  constructor(private apiSerivce: ServiceapiService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({          
      AccountType: [null],
      EntryType: [null],
      TodayTransactionDate: [null],
      TransactionStartDate:[null],
      TransactionEndDate: [null],
      PageSize: [null],
      FromEmail: [null],
      Password: [null],
      Host: [null],
      Port: [null],
      IfSSL: [false],
    });   
    this.Configbind()   
  }
  Configbind(): void {
    let url='api/ConfigurationGet/ConfigurationGetAPI';
    let data1 = {
        "CompanyID": "1"
    }   
    this.apiSerivce.PostToserver(data1,url)
    .subscribe(data => {
      this.ConfigurationRecords = data['Table']
      this.form = this.formBuilder.group({          
        AccountType: this.ConfigurationRecords[0].AccountType,
        EntryType: this.ConfigurationRecords[0].TransactionType.toString(),
        TodayTransactionDate: this.ConfigurationRecords[0].TransDate,
        TransactionStartDate:this.ConfigurationRecords[0].TransactionStartDate,
        TransactionEndDate: this.ConfigurationRecords[0].TransactionEdtDate,
        PageSize: this.ConfigurationRecords[0].PageSize,
        FromEmail: this.ConfigurationRecords[0].Email,
        Password:this.ConfigurationRecords[0].Password,
        Host: this.ConfigurationRecords[0].Host,
        Port: this.ConfigurationRecords[0].Port,
        IfSSL: [true],         
    });     
    });
}
}
