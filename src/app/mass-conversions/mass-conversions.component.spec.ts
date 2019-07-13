import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassConversionsComponent } from './mass-conversions.component';

describe('MassConversionsComponent', () => {
  let component: MassConversionsComponent;
  let fixture: ComponentFixture<MassConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
