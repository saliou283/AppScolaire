import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationLayoutPage } from './administration-layout.page';

describe('AdministrationLayoutPage', () => {
  let component: AdministrationLayoutPage;
  let fixture: ComponentFixture<AdministrationLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
