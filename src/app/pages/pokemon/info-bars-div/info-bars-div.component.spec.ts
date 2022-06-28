import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBarsDivComponent } from './info-bars-div.component';

describe('InfoBarsDivComponent', () => {
  let component: InfoBarsDivComponent;
  let fixture: ComponentFixture<InfoBarsDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBarsDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBarsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
