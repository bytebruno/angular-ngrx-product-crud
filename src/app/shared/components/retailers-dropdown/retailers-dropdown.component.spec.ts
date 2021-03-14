import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersDropdownComponent } from './retailers-dropdown.component';

describe('RetailersDropdownComponent', () => {
  let component: RetailersDropdownComponent;
  let fixture: ComponentFixture<RetailersDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailersDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
