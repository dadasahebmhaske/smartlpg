import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoriesMasterComponent } from './item-categories-master.component';

describe('ItemCategoriesMasterComponent', () => {
  let component: ItemCategoriesMasterComponent;
  let fixture: ComponentFixture<ItemCategoriesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoriesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoriesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
