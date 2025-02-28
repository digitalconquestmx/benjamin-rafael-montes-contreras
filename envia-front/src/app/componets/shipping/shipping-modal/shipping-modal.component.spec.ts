import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingModalComponent } from './shipping-modal.component';

describe('ShippingModalComponent', () => {
  let component: ShippingModalComponent;
  let fixture: ComponentFixture<ShippingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShippingModalComponent]
    });
    fixture = TestBed.createComponent(ShippingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
