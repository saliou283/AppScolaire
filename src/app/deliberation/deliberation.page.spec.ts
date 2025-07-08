import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliberationPage } from './deliberation.page';

describe('DeliberationPage', () => {
  let component: DeliberationPage;
  let fixture: ComponentFixture<DeliberationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
