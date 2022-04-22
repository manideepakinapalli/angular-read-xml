import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagestatusComponent } from './packagestatus.component';

describe('PackagestatusComponent', () => {
  let component: PackagestatusComponent;
  let fixture: ComponentFixture<PackagestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
