import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProductState } from '../../state/products.reducer'
import { defaultInitialState } from '../../util/product.mock'
import { ProductCreateComponent } from './product-create.component'

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent
  let fixture: ComponentFixture<ProductCreateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ProductCreateComponent],
      providers: [
        provideMockStore<IProductState>({
          initialState: defaultInitialState,
          selectors: [{ selector: selectLoading, value: false }],
        }),
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProductCreateComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
      })
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
