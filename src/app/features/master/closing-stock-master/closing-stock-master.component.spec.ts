import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingStockMasterComponent } from './closing-stock-master.component';

describe('ClosingStockMasterComponent', () => {
  let component: ClosingStockMasterComponent;
  let fixture: ComponentFixture<ClosingStockMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingStockMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingStockMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
