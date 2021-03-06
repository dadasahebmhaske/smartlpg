import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionTypeComponent } from './connection-type.component';

describe('ConnectionTypeComponent', () => {
  let component: ConnectionTypeComponent;
  let fixture: ComponentFixture<ConnectionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
