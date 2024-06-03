import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoseCervantesPage } from './jose-cervantes.page';

describe('JoseCervantesPage', () => {
  let component: JoseCervantesPage;
  let fixture: ComponentFixture<JoseCervantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoseCervantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
