import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-board',
  templateUrl: './delivery-board.component.html',
  styleUrls: ['./delivery-board.component.scss']
})
export class DeliveryBoardComponent implements OnInit {
  private toBePackedOrderCounts: number;
  private toBeDeliveredOrderCounts: number;
  private toBeClosedOrderCounts: number;

  constructor() { }

  ngOnInit() {
    this.toBePackedOrderCounts = 2;
    this.toBeDeliveredOrderCounts = 3;
    this.toBeClosedOrderCounts = 4;
  }

}
