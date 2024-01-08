import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProductComponent } from './liste-product.component';

describe('ListeProductComponent', () => {
  let component: ListeProductComponent;
  let fixture: ComponentFixture<ListeProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProductComponent]
    });
    fixture = TestBed.createComponent(ListeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
