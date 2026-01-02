import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnseignantLayoutPage } from './enseignant-layout.page';

describe('EnseignantLayoutPage', () => {
  let component: EnseignantLayoutPage;
  let fixture: ComponentFixture<EnseignantLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
