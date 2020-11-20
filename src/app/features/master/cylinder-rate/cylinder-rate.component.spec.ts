import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderRateComponent } from './cylinder-rate.component';

describe('CylinderRateComponent', () => {
  let component: CylinderRateComponent;
  let fixture: ComponentFixture<CylinderRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
