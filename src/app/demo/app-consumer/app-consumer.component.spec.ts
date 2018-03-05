import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsumerComponent } from './app-consumer.component';

describe('AppConsumerComponent', () => {
  let component: AppConsumerComponent;
  let fixture: ComponentFixture<AppConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
