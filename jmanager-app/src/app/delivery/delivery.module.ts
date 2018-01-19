import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeliveryBoardComponent} from './delivery-board/delivery-board.component';
import {RouterModule, Routes} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {CardModule} from '../../../node_modules/primeng/components/card/card';

const deliveryRoutes: Routes = [
  {path: '', component: DeliveryBoardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(deliveryRoutes),
    ButtonModule,
    CardModule
  ],
  declarations: [DeliveryBoardComponent]
})
export class DeliveryModule {
}
