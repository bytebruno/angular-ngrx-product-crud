import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProductState } from '../../state/products.reducer'
import { selectProductsList } from '../../state/products.selectors'
import { defaultInitialState, MockData } from '../../util/product.mock'
import { ProductCardComponent } from '../product-card/product-card.component'
import { ProductsListComponent } from './products-list.component'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>
  let el: DebugElement
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductsListComponent, ProductCardComponent],
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
        el = fixture.debugElement
      })
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should display the products list', () => {
    selectProductsList.setResult(MockData)

    store.refreshState()
    fixture.detectChanges()

    const cards = el.queryAll(By.css('.card-container'))
    expect(cards).toBeTruthy('Could not find products')
    expect(cards.length).toBe(2, 'Unexpected number of products')
  })

  it('should display the first product correctly', () => {
    selectProductsList.setResult(MockData)
    let product = MockData[0]

    store.refreshState()
    fixture.detectChanges()

    const card = el.query(By.css('.card-container:first-child')),
      name = card.query(By.css('.card-content h5'))

    expect(card).toBeTruthy('Could not find course card')
    expect(name.nativeElement.textContent).toBe(product.Name)
  })
})
