import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-delivery-board',
  templateUrl: './delivery-board.component.html',
  styleUrls: ['./delivery-board.component.scss']
})
export class DeliveryBoardComponent implements OnInit {
  private items: MenuItem[];
  private toBePackedOrderCounts: number;
  private toBeDeliveredOrderCounts: number;
  private toBeClosedOrderCounts: number;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: '首页', icon: 'fa-home'}
    ];
    this.toBePackedOrderCounts = 2;
    this.toBeDeliveredOrderCounts = 3;
    this.toBeClosedOrderCounts = 4;
  }

}
