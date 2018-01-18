import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoardComponent } from './delivery-board.component';

describe('DeliveryBoardComponent', () => {
  let component: DeliveryBoardComponent;
  let fixture: ComponentFixture<DeliveryBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
