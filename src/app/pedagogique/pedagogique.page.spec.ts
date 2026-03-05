import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedagogiquePage } from './pedagogique.page';

describe('PedagogiquePage', () => {
  let component: PedagogiquePage;
  let fixture: ComponentFixture<PedagogiquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
