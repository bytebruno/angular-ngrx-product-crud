import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { setLoading } from 'src/app/shared/components/loading-spinner/state/loading.action'
import { selectLoading } from 'src/app/shared/components/loading-spinner/state/loading.selectors'
import { IProduct } from '../../model/product.model'
import { deleteProductRequest, getSelectedProductFromSessionStorage } from '../../state/products.actions'
import { selectedProduct } from '../../state/products.selectors'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<IProduct | null>
  loading$!: Observable<boolean>
  notifier = new Subject()

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)
    this.product$ = this.store.select(selectedProduct)

    this.product$.pipe(takeUntil(this.notifier)).subscribe((product) => {
      if (product === null) {
        if (sessionStorage.getItem('selectedProduct')) this.store.dispatch(getSelectedProductFromSessionStorage())
        else this.router.navigate(['/products'])
      }
    })
  }

  goToEditProduct(productId: number) {
    this.router.navigate(['/product', productId])
  }

  deleteProduct(productId: number) {
    this.store.dispatch(setLoading({ loading: true }))
    this.store.dispatch(deleteProductRequest({ productId }))
  }

  ngOnDestroy() {
    this.notifier.next()
    this.notifier.complete()
  }
}
