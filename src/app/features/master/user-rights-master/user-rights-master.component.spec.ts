import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRightsMasterComponent } from './user-rights-master.component';

describe('UserRightsMasterComponent', () => {
  let component: UserRightsMasterComponent;
  let fixture: ComponentFixture<UserRightsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRightsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRightsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
