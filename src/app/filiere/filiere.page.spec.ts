import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtudiantsPage } from './filiere.page';

describe('EtudiantsPage', () => {
  let component: EtudiantsPage;
  let fixture: ComponentFixture<EtudiantsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
