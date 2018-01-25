import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DeliveryBoardComponent} from './delivery-board/delivery-board.component';
import { DeliveryNewOrderComponent } from './delivery-new-order/delivery-new-order.component';

import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


const deliveryRoutes: Routes = [
  {path: '', component: DeliveryBoardComponent},
  {path: 'neworder', component: DeliveryNewOrderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(deliveryRoutes),
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    MenubarModule
  ],
  declarations: [DeliveryBoardComponent, DeliveryNewOrderComponent]
})
export class DeliveryModule {
}
