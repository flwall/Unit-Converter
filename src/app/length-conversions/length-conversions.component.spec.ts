import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConversionsComponent } from './length-conversions.component';

describe('LengthConversionsComponent', () => {
  let component: LengthConversionsComponent;
  let fixture: ComponentFixture<LengthConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
