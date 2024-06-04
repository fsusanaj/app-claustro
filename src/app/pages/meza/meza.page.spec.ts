import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MezaPage } from './meza.page';

describe('MezaPage', () => {
  let component: MezaPage;
  let fixture: ComponentFixture<MezaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
