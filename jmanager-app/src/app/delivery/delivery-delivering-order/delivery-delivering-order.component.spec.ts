import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDeliveringOrderComponent } from './delivery-delivering-order.component';

describe('DeliveryDeliveringOrderComponent', () => {
  let component: DeliveryDeliveringOrderComponent;
  let fixture: ComponentFixture<DeliveryDeliveringOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryDeliveringOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDeliveringOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
