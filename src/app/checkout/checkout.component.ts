import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor() { }
  @Input() show=[];
  @Input() total;
  total1:number;
  tax:number;
  
  amountpay:number;
  ch:boolean=false;
  checkout()
{ this.ch=true;
  this.total1=this.total;
  this.tax=this.total*0.20;
  console.log(this.tax)
  this.amountpay=this.total+this.tax;
}
  ngOnInit() {
  }

}

