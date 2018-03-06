import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimNavComponent } from './prim-nav.component';

describe('PrimNavComponent', () => {
  let component: PrimNavComponent;
  let fixture: ComponentFixture<PrimNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
