import { Component, OnInit } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  constructor() { }

  ngOnInit() {
  }

}
