import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalinfoComponent } from './vitalinfo.component';

describe('VitalinfoComponent', () => {
  let component: VitalinfoComponent;
  let fixture: ComponentFixture<VitalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
