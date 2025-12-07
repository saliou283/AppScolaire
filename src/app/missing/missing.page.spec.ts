import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissingPage } from './missing.page';

describe('MissingPage', () => {
  let component: MissingPage;
  let fixture: ComponentFixture<MissingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
