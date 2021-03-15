import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { IProductState } from '../../state/products.reducer'
import { defaultInitialState } from '../../util/product.mock'
import { ProductCardComponent } from './product-card.component'

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductCardComponent],
      providers: [
        provideMockStore<IProductState>({
          initialState: defaultInitialState,
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
