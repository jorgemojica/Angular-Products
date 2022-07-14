import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeneralProductComponent } from './list-general-product.component';

describe('ListGeneralProductComponent', () => {
  let component: ListGeneralProductComponent;
  let fixture: ComponentFixture<ListGeneralProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGeneralProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeneralProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
