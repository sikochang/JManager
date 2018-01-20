import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DeliveryBoardComponent} from './delivery-board/delivery-board.component';
import { DeliveryNewOrderComponent } from './delivery-new-order/delivery-new-order.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from '../../../node_modules/primeng/components/card/card';


const deliveryRoutes: Routes = [
  {path: '', component: DeliveryBoardComponent},
  {path: 'neworder', component: DeliveryNewOrderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(deliveryRoutes),
    ButtonModule,
    CardModule
  ],
  declarations: [DeliveryBoardComponent, DeliveryNewOrderComponent]
})
export class DeliveryModule {
}
