import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryClosingOrderComponent } from './delivery-closing-order.component';

describe('DeliveryClosingOrderComponent', () => {
  let component: DeliveryClosingOrderComponent;
  let fixture: ComponentFixture<DeliveryClosingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryClosingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryClosingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
