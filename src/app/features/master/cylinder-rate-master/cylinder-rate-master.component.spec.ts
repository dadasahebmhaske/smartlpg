import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderRateMasterComponent } from './cylinder-rate-master.component';

describe('CylinderRateMasterComponent', () => {
  let component: CylinderRateMasterComponent;
  let fixture: ComponentFixture<CylinderRateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderRateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderRateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
