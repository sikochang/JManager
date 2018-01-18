import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DeliveryModule} from './delivery/delivery.module';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'delivery', loadChildren: './delivery/delivery.module#DeliveryModule'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeliveryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
