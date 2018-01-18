import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryBoardComponent } from './delivery-board/delivery-board.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';

const deliveryRoutes: Routes = [
  {path: '', component: DeliveryBoardComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(deliveryRoutes)
  ],
  declarations: [DeliveryBoardComponent]
})
export class DeliveryModule { }
