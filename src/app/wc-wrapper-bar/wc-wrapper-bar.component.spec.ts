import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcWrapperBarComponent } from './wc-wrapper-bar.component';

describe('WcWrapperBarComponent', () => {
  let component: WcWrapperBarComponent;
  let fixture: ComponentFixture<WcWrapperBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WcWrapperBarComponent]
    });
    fixture = TestBed.createComponent(WcWrapperBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
