import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { DayendComponent } from './dayend/dayend.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ProfileComponent } from './profile/profile.component';
import { FormControl, FormGroup, Validators ,FormsModule, ReactiveFormsModule,NgModel} from '@angular/forms';
import { AppFieldErrorDisplayComponent } from './app-field-error-display/app-field-error-display.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CompanyComponent } from './company/company.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
// const appRoutes: Routes = [
//   { path: 'layout', 
//   component: LayoutComponent },
  
// ];


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponentComponent,
    LayoutComponent,
    WelcomeComponent,
    TransactionComponent,
    CustomerComponent,
    AddcustomerComponent,
    TopnavComponent,
    AddtransactionComponent,
    DayendComponent,
    ConfigurationComponent,
    ProfileComponent,
    AppFieldErrorDisplayComponent,
    LoginformComponent,
    CompanyComponent,
    AddcompanyComponent,
    AlertComponent
  ],
  imports: [
   
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([    
      {path:'',component:HomeComponentComponent},
      {path:'layout',component:LayoutComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'customer',component:CustomerComponent},
      {path:'transaction',component:TransactionComponent},
      {path:'addcustomer',component:AddcustomerComponent},
      {path:'addtransaction',component:AddtransactionComponent},
      {path:'dayend',component:DayendComponent},
      {path:'configuration',component:ConfigurationComponent},
      {path:'profile',component:ProfileComponent},
      {path:'company',component:CompanyComponent},
      {path:'addcompany',component:AddcompanyComponent}
    ])
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy,useValue:'/'},AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
