import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ServiceapiService } from '../serviceapi.service';
import { Accinterface } from "../Accinterface";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css'],
  providers: [ServiceapiService]
})


export class AddtransactionComponent implements OnInit {
  form: FormGroup;
  car:customerddlclas;
  colours: Array<customerddl>;
  CutomerNameDDL: any[];
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  constructor(private apiSerivce: ServiceapiService,private formBuilder: FormBuilder,public router: Router) { 
    
  }


  ngOnInit() {
    
    this.Dropdown()
    this.form = this.formBuilder.group({          
  
      Name:['ss'],
      TransactionDate:[this.bsValue],
      TransactionType:['ss454s'],
      Credit:['ssrs'],
      Debit:['srrss'],
      Remarks:['sdffss']
    });
    
  }
  Dropdown(): void {
    let url = 'api/CustomerDropdownList/CustomerDropdownListAPI/';
    let data1 = {
      "CompanyID": "1"
    }
    this.apiSerivce.PostToserver(data1, url)
      .subscribe(data => {
        this.CutomerNameDDL = data['Table']
        this.colours = this.CutomerNameDDL; 
    this.car = new customerddlclas();
    this.car.colour = this.colours[1]; 
      });
    }

  IUDTransaction() {
    console.log('12121')

  }
}

export class customerddlclas  
{
    colour:customerddl;
}

export class customerddl
{
    constructor(CustomerID:number, FullName:string) {
        this.CustomerID=CustomerID;
        this.FullName=FullName;
    }

    CustomerID:number;
    FullName:string;
}
