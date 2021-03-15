import { SpyLocation } from '@angular/common/testing'
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProductState } from '../../state/products.reducer'
import { selectedProduct } from '../../state/products.selectors'
import { defaultInitialState, ProductMock } from '../../util/product.mock'
import { ProductsListComponent } from '../products-list/products-list.component'
import { ProductDetailComponent } from './product-detail.component'

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent
  let fixture: ComponentFixture<ProductDetailComponent>
  let store: MockStore
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'products',
            component: ProductsListComponent,
          },
        ]),
      ],
      declarations: [ProductDetailComponent],
      providers: [
        provideMockStore<IProductState>({
          initialState: defaultInitialState,
          selectors: [
            { selector: selectedProduct, value: ProductMock },
            { selector: selectLoading, value: false },
          ],
        }),
        { provide: Location, useClass: SpyLocation },
      ],
    })
      .compileComponents()
      .then(() => {
        store = TestBed.inject(MockStore)
        fixture = TestBed.createComponent(ProductDetailComponent)
        component = fixture.componentInstance
        el = fixture.debugElement
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the title', async () => {
    selectedProduct.setResult(ProductMock)

    store.refreshState()
    fixture.detectChanges()

    const productEl = el.query(By.css('.card-content')),
      name = productEl.query(By.css('.product-title'))

    expect(productEl).toBeTruthy('Could not find product element')
    expect(name.nativeElement.textContent).toBe(ProductMock.Name)
  })
})
