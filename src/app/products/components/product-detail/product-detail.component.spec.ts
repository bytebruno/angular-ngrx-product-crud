import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProductState } from '../../state/products.reducer'
import { selectedProduct } from '../../state/products.selectors'
import { defaultInitialState, ProductMock } from '../../util/product.mock'
import { ProductDetailComponent } from './product-detail.component'

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent
  let fixture: ComponentFixture<ProductDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductDetailComponent],
      providers: [
        provideMockStore<IProductState>({
          initialState: defaultInitialState,
          selectors: [
            { selector: selectedProduct, value: ProductMock },
            { selector: selectLoading, value: false },
          ],
        }),
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProductDetailComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
