import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneralProductComponent } from './create-general-product.component';

describe('CreateGeneralProductComponent', () => {
  let component: CreateGeneralProductComponent;
  let fixture: ComponentFixture<CreateGeneralProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGeneralProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeneralProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
