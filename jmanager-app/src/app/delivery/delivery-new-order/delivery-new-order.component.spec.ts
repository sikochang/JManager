import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNewOrderComponent } from './delivery-new-order.component';

describe('DeliveryNewOrderComponent', () => {
  let component: DeliveryNewOrderComponent;
  let fixture: ComponentFixture<DeliveryNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
