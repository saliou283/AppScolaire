import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisieNotesPage } from './saisie-notes.page';

describe('SaisieNotesPage', () => {
  let component: SaisieNotesPage;
  let fixture: ComponentFixture<SaisieNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
