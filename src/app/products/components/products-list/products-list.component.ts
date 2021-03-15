import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { setLoading } from '../../../shared/components/loading-spinner/state/loading.action'
import { IProduct } from '../../model/product.model'
import { getProducts } from '../../state/products.actions'
import { selectProductsList } from '../../state/products.selectors'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<Array<IProduct>>
  loading$!: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsList)
    this.loading$ = this.store.select(selectLoading)

    this.store.dispatch(setLoading({ loading: true }))
    this.store.dispatch(getProducts())
  }

  trackProducts = (index: number, product: IProduct) => (product ? product.Id : null)
}
