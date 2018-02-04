import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryClosingOrderListComponent } from './delivery-closing-order-list.component';

describe('DeliveryClosingOrderListComponent', () => {
  let component: DeliveryClosingOrderListComponent;
  let fixture: ComponentFixture<DeliveryClosingOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryClosingOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryClosingOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
