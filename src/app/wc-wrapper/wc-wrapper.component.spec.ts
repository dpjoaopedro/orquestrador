import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcWrapperComponent } from './wc-wrapper.component';

describe('WcWrapperComponent', () => {
  let component: WcWrapperComponent;
  let fixture: ComponentFixture<WcWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WcWrapperComponent]
    });
    fixture = TestBed.createComponent(WcWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
