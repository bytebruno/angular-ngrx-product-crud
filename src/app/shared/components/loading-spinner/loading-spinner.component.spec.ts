import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { LoadingSpinnerComponent } from './loading-spinner.component'
import { ILoadingState } from './state/loading.reducer'
import { selectLoading } from './state/loading.selectors'

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent
  let fixture: ComponentFixture<LoadingSpinnerComponent>
  let el: DebugElement
  let store: MockStore

  const defaultInitialState = { loading: false }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
      providers: [
        provideMockStore<ILoadingState>({
          initialState: defaultInitialState,
          selectors: [{ selector: selectLoading, value: false }],
        }),
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoadingSpinnerComponent)
        component = fixture.componentInstance
        el = fixture.debugElement
        store = TestBed.inject(MockStore)
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should shown when loading is true', () => {
    selectLoading.setResult(true)
    store.refreshState()
    fixture.detectChanges()

    const element = el.query(By.css('.spinner'))?.nativeElement

    expect(element).toBeTruthy()
  })

  it('should hide when loading is false', () => {
    selectLoading.setResult(false)
    store.refreshState()
    fixture.detectChanges()

    const element = el.query(By.css('.spinner'))?.nativeElement
    expect(element).toBeFalsy()
  })
})
