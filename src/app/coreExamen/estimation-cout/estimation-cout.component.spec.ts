import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationCoutComponent } from './estimation-cout.component';

describe('EstimationCoutComponent', () => {
  let component: EstimationCoutComponent;
  let fixture: ComponentFixture<EstimationCoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimationCoutComponent]
    });
    fixture = TestBed.createComponent(EstimationCoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
