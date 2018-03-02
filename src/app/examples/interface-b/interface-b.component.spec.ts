import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceBComponent } from './interface-b.component';

describe('InterfaceBComponent', () => {
  let component: InterfaceBComponent;
  let fixture: ComponentFixture<InterfaceBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
