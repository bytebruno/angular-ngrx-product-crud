import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { getProducts } from '../../state/products.actions'
import { selectProductsList } from '../../state/products.reducer'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Array<any>>

  constructor(private store: Store<{ products: object }>) {
    this.products$ = store.select(selectProductsList)
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts())
  }

  trackProducts = (index: number, product: any) => (product ? product.Id : null)
}
