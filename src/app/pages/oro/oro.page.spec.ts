import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OroPage } from './oro.page';

describe('OroPage', () => {
  let component: OroPage;
  let fixture: ComponentFixture<OroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
