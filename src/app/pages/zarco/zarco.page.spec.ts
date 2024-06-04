import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZarcoPage } from './zarco.page';

describe('ZarcoPage', () => {
  let component: ZarcoPage;
  let fixture: ComponentFixture<ZarcoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
