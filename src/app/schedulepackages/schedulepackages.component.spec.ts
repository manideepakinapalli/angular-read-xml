import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulepackagesComponent } from './schedulepackages.component';

describe('SchedulepackagesComponent', () => {
  let component: SchedulepackagesComponent;
  let fixture: ComponentFixture<SchedulepackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulepackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulepackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
