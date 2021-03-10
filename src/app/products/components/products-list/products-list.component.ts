import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
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
  products$: Observable<Array<IProduct>>

  constructor(private store: Store<{ products: object }>) {
    this.products$ = store.select(selectProductsList)
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts())
  }

  trackProducts = (index: number, product: IProduct) => (product ? product.Id : null)
}
