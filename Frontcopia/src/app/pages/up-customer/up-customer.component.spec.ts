import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCustomerComponent } from './up-customer.component';

describe('UpCustomerComponent', () => {
  let component: UpCustomerComponent;
  let fixture: ComponentFixture<UpCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
