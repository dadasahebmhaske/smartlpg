import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanMasterComponent } from './deliveryman-master.component';

describe('DeliverymanMasterComponent', () => {
  let component: DeliverymanMasterComponent;
  let fixture: ComponentFixture<DeliverymanMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
