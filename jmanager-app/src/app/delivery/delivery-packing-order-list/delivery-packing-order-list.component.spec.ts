import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPackingOrderListComponent } from './delivery-packing-order-list.component';

describe('DeliveryPackingOrderListComponent', () => {
  let component: DeliveryPackingOrderListComponent;
  let fixture: ComponentFixture<DeliveryPackingOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPackingOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPackingOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
