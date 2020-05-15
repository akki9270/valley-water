import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsgsComponent } from './usgs.component';

describe('UsgsComponent', () => {
  let component: UsgsComponent;
  let fixture: ComponentFixture<UsgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
