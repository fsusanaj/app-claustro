import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JerryVelaPage } from './jerry-vela.page';

describe('JerryVelaPage', () => {
  let component: JerryVelaPage;
  let fixture: ComponentFixture<JerryVelaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JerryVelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
