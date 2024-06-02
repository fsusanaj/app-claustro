import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadoPersonalPage } from './cuidado-personal.page';

describe('CuidadoPersonalPage', () => {
  let component: CuidadoPersonalPage;
  let fixture: ComponentFixture<CuidadoPersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
