import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmploiPage } from './emploi.page';

describe('EmploiPage', () => {
  let component: EmploiPage;
  let fixture: ComponentFixture<EmploiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
