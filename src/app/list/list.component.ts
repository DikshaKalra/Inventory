import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() ItemsCreated = new EventEmitter();

  constructor() { }
  item1:string;
  item2:string;
  price1:number;
  price2:number;
 @Output() generate = new EventEmitter;
 
  generateinvoice()
  {
         let invoice={item1:this.item1,item2:this.item2,price1:this.price1,price2:this.price2,total:+this.price1+ + this.price2};
           this.generate.emit(invoice)

  }

  ngOnInit() {
  }

}
