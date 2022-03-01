import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseLoadComponent } from './database-load.component';

describe('DatabaseLoadComponent', () => {
  let component: DatabaseLoadComponent;
  let fixture: ComponentFixture<DatabaseLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
