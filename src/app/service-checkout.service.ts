import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCheckoutService {
  tax:number;
  totalbill:number;
  getBill(amount:number)
  {
    this.tax=amount*0.20;
    this.totalbill=amount+this.tax;
    return this.totalbill;
  }
  constructor() { }
}
