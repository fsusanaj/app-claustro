import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestidurasPage } from './investiduras.page';

describe('InvestidurasPage', () => {
  let component: InvestidurasPage;
  let fixture: ComponentFixture<InvestidurasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestidurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
