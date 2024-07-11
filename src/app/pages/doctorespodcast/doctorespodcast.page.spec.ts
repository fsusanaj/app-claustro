import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorespodcastPage } from './doctorespodcast.page';

describe('DoctorespodcastPage', () => {
  let component: DoctorespodcastPage;
  let fixture: ComponentFixture<DoctorespodcastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorespodcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
