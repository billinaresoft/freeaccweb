import { Component, OnInit ,ViewChild ,ElementRef } from '@angular/core';
import 'rxjs/add/operator/map'
import { WelcomeComponent } from '../welcome/welcome.component';
import { ServiceapiService } from '../serviceapi.service';
import { Accinterface } from "../Accinterface";
import { RouterModule, Router } from '@angular/router';
import { FormGroup,NgForm,   FormBuilder,    Validators, FormControl } from '@angular/forms';
@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css'],
    providers: [ServiceapiService]
})
export class HomeComponentComponent implements OnInit {    
    LoginObj: any[];
    form: FormGroup;    
    constructor(private apiSerivce: ServiceapiService,public router: Router,private formBuilder: FormBuilder) {
        
       
     } 
    
    login() {
       let url='api/UserLogin/UserLoginAPI/';
      if(this.form.valid){
        let data1 = {
            "Email": this.form.controls.EmailID.value,
            "Password": this.form.controls.Password.value
        }
        this.apiSerivce.PostToserver(data1,url)
            .subscribe(data => {            
                this.LoginObj = data['Table']
                if (this.LoginObj[0].Result == "S") {
                    //alert(this.LoginObj[0].Result)
                    localStorage.setItem('LoginData', JSON.stringify(data['Table']));                    
                    document.getElementById("popclose").click();
                    this.router.navigateByUrl('/welcome');
                   
                }
                else {
                    
                }
            });
        }
        else{
            this.validateAllFormFields(this.form);
        }
     
    }
 
    ngOnInit() {    
        this.form = this.formBuilder.group({          
            EmailID: [null, [Validators.required, Validators.email]],
            Password: [null, [Validators.required]],
          });
    }
    isFieldValid(field: string) {
        return !this.form.get(field).valid && this.form.get(field).touched;
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
        this.form.reset();
      }
}
