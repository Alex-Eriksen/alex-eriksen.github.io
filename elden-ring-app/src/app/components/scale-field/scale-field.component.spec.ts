import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleFieldComponent } from './scale-field.component';

describe('ScaleFieldComponent', () => {
  let component: ScaleFieldComponent;
  let fixture: ComponentFixture<ScaleFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
