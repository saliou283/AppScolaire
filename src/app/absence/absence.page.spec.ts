import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbsencePage } from './absence.page';

describe('AbsencePage', () => {
  let component: AbsencePage;
  let fixture: ComponentFixture<AbsencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
