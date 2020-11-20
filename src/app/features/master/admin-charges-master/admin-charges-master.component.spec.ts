import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChargesMasterComponent } from './admin-charges-master.component';

describe('AdminChargesMasterComponent', () => {
  let component: AdminChargesMasterComponent;
  let fixture: ComponentFixture<AdminChargesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChargesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChargesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
