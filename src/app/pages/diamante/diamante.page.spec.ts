import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiamantePage } from './diamante.page';

describe('DiamantePage', () => {
  let component: DiamantePage;
  let fixture: ComponentFixture<DiamantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
