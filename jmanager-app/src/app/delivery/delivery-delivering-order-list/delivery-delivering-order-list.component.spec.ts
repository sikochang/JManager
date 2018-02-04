import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDeliveringOrderListComponent } from './delivery-delivering-order-list.component';

describe('DeliveryDeliveringOrderListComponent', () => {
  let component: DeliveryDeliveringOrderListComponent;
  let fixture: ComponentFixture<DeliveryDeliveringOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryDeliveringOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDeliveringOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
