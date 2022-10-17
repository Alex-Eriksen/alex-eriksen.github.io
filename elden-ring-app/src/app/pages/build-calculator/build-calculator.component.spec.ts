import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCalculatorComponent } from './build-calculator.component';

describe('BuildCalculatorComponent', () => {
  let component: BuildCalculatorComponent;
  let fixture: ComponentFixture<BuildCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
