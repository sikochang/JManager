import {Component, OnInit} from '@angular/core';
import {OrderItem} from '../order-item';

@Component({
  selector: 'app-delivery-new-order',
  templateUrl: './delivery-new-order.component.html',
  styleUrls: ['./delivery-new-order.component.scss']
})
export class DeliveryNewOrderComponent implements OnInit {
  private isPayerNeeded: boolean;
  private orderItems: OrderItem[];

  constructor() {
  }

  ngOnInit() {
    this.isPayerNeeded = false;
    this.orderItems = [{name: '', specification: '', quantity: 0}];
  }

  addOrderItem() {
    console.log('in addOrderItem');
    this.orderItems.push(new OrderItem('', '', 1));
  }

}
