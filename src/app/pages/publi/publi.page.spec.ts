import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PubliPage } from './publi.page';

describe('PubliPage', () => {
  let component: PubliPage;
  let fixture: ComponentFixture<PubliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
