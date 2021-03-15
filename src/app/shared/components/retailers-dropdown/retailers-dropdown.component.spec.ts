import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ControlContainer, FormControlDirective, FormGroupDirective } from '@angular/forms'
import { RetailersDropdownComponent } from './retailers-dropdown.component'

describe('RetailersDropdownComponent', () => {
  let component: RetailersDropdownComponent
  let fixture: ComponentFixture<RetailersDropdownComponent>
  let formGroupDirective: FormControlDirective

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [RetailersDropdownComponent],
      providers: [FormGroupDirective, { provide: ControlContainer, useValue: formGroupDirective }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(RetailersDropdownComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
