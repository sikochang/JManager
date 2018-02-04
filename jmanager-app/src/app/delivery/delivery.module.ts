import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {DeliveryBoardComponent} from './delivery-board/delivery-board.component';
import {DeliveryNewOrderComponent} from './delivery-new-order/delivery-new-order.component';
import { DeliveryPackingOrderListComponent } from './delivery-packing-order-list/delivery-packing-order-list.component';
import { DeliveryDeliveringOrderListComponent } from './delivery-delivering-order-list/delivery-delivering-order-list.component';
import { DeliveryClosingOrderListComponent } from './delivery-closing-order-list/delivery-closing-order-list.component';
import { DeliveryPackingOrderComponent } from './delivery-packing-order/delivery-packing-order.component';
import { DeliveryDeliveringOrderComponent } from './delivery-delivering-order/delivery-delivering-order.component';
import { DeliveryClosingOrderComponent } from './delivery-closing-order/delivery-closing-order.component';

import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {SpinnerModule} from 'primeng/spinner';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


const deliveryRoutes: Routes = [
  {path: '', component: DeliveryBoardComponent},
  {path: 'neworder', component: DeliveryNewOrderComponent},
  {path: 'packingorderlist', component: DeliveryPackingOrderListComponent},
  {path: 'deliveringorderlist', component: DeliveryDeliveringOrderListComponent},
  {path: 'closingorderlist', component: DeliveryClosingOrderListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(deliveryRoutes),
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule,
    DataTableModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    MenubarModule
  ],
  declarations: [
    DeliveryBoardComponent,
    DeliveryNewOrderComponent,
    DeliveryPackingOrderListComponent,
    DeliveryDeliveringOrderListComponent,
    DeliveryClosingOrderListComponent,
    DeliveryPackingOrderComponent,
    DeliveryDeliveringOrderComponent,
    DeliveryClosingOrderComponent]
})
export class DeliveryModule {
}
