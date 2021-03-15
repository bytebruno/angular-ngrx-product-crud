import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProductState } from '../../state/products.reducer'
import { selectProductsList } from '../../state/products.selectors'
import { defaultInitialState, MockData } from '../../util/product.mock'
import { ProductsListComponent } from './products-list.component'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>
  let store: MockStore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      providers: [
        provideMockStore<IProductState>({
          initialState: defaultInitialState,
          selectors: [
            { selector: selectProductsList, value: MockData },
            { selector: selectLoading, value: false },
          ],
        }),
      ],
    })
      .compileComponents()
      .then(() => {
        store = TestBed.inject(MockStore)
        fixture = TestBed.createComponent(ProductsListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })
})
