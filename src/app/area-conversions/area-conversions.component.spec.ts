import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConversionsComponent } from './area-conversions.component';

describe('AreaConversionsComponent', () => {
  let component: AreaConversionsComponent;
  let fixture: ComponentFixture<AreaConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
