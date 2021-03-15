import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { SnackbarComponent } from './snackbar.component'
import { ISnackbarState } from './state/snackbar.reducer'

describe('SnackbarComponent', () => {
  let component: SnackbarComponent
  let fixture: ComponentFixture<SnackbarComponent>

  const defaultInitialState = { show: false, message: 'Snackbar test', mode: 'success' }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      providers: [
        provideMockStore<ISnackbarState>({
          initialState: defaultInitialState,
          // selectors: [
          //   { selector: selectProductsList, value: MockData },
          //   { selector: selectLoading, value: false },
          // ],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
