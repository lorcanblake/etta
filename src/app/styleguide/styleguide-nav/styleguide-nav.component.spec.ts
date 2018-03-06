import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideNavComponent } from './styleguide-nav.component';

describe('StyleguideNavComponent', () => {
  let component: StyleguideNavComponent;
  let fixture: ComponentFixture<StyleguideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleguideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
