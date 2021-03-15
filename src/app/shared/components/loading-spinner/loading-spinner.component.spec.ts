import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { LoadingSpinnerComponent } from './loading-spinner.component'
import { ILoadingState } from './state/loading.reducer'

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent
  let fixture: ComponentFixture<LoadingSpinnerComponent>

  const defaultInitialState = { loading: false }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
      providers: [
        provideMockStore<ILoadingState>({
          initialState: defaultInitialState,
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
