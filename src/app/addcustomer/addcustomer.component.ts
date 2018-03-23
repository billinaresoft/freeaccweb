import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';
import { Accinterface } from "../Accinterface";
import { FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router ,ActivatedRoute} from '@angular/router';
import { AlertService } from '../_services/index';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css'],
  providers: [ServiceapiService]
})
export class AddcustomerComponent implements OnInit {
  addcustomerform: FormGroup;
  LoginObj: any[];
  CustomerID: string;
  Flag: string;
  CustomerForms:any;
  constructor(private alertService: AlertService,private route: ActivatedRoute,private apiSerivce: ServiceapiService,private formBuilder: FormBuilder,public router: Router) {


   }
   editCustomer(CustomerID,Flag): void {
    let url = 'api/EditCustomer/EditCustomerAPI/';
        let data1 = {
          "CustomerID":CustomerID
        }
        this.apiSerivce.PostToserver(data1, url)
          .subscribe(data => {
            this.CustomerForms = data['Table']
            this.addcustomerform = this.formBuilder.group({          
              FirstName: [this.CustomerForms[0].FirstName],
              LastName: [this.CustomerForms[0].LastName],
              Address: [this.CustomerForms[0].Address],
              City:[this.CustomerForms[0].City],
              Mobile:[this.CustomerForms[0].Mobile],
              CustomerID:[CustomerID],
              Flag:[Flag],
            });
          }
        ); 
  }
  ngOnInit() {
    this.addcustomerform = this.formBuilder.group({          
      FirstName: [null,Validators.required],
      LastName:  [null],
      Address:  [null],
      City: [null],
      Mobile: [null],
      CustomerID: ['1'],
      Flag: ['1'],
    });
        this.route.queryParams
        .filter(params => params.CustomerID)
        .subscribe(params => {
          this.CustomerID = params.CustomerID;
          this.Flag = params.Flag;
          this.editCustomer(this.CustomerID,this.Flag)
        });
        
  }
  IUDCustomer() {
    let url = 'api/CustomerIUD/CustomerIUDAPI';
    if (this.addcustomerform.valid) {
      let data1 = {
        "CustomerID": this.addcustomerform.controls.CustomerID.value,
        "FirstName": this.addcustomerform.controls.FirstName.value,
        "LastName": this.addcustomerform.controls.LastName.value,
        "Address": this.addcustomerform.controls.Address.value,
        "City": this.addcustomerform.controls.City.value,
        "District": null,
        "State":  null,
        "Country":  null,
        "Mobile": this.addcustomerform.controls.Mobile.value,
        "UserID": "",
        "CompanyID":  1,
        "Flag":this.addcustomerform.controls.Flag.value,
      }
      this.apiSerivce.PostToserver(data1, url)
        .subscribe(data => {
          this.LoginObj = data['Table']         
          if (this.LoginObj[0].Result == "S") {
           
            this.alertService.success('Record is inserted');
            //this.router.navigateByUrl('/customer');
           
          }
          else {

          }
        });
    }
    else {
      this.validateAllFormFields(this.addcustomerform);
    }

  }
  isFieldValid(field: string) {
    return !this.addcustomerform.get(field).valid && this.addcustomerform.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.addcustomerform.reset();
  }
}
