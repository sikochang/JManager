import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPackingOrderComponent } from './delivery-packing-order.component';

describe('DeliveryPackingOrderComponent', () => {
  let component: DeliveryPackingOrderComponent;
  let fixture: ComponentFixture<DeliveryPackingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPackingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPackingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
