import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVendorComponent } from './app-vendor.component';

describe('AppVendorComponent', () => {
  let component: AppVendorComponent;
  let fixture: ComponentFixture<AppVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
