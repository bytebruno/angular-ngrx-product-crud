import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { IProduct } from '../../model/product.model'
import { setSelectedProduct, setSelectedProductToSessionStorage } from '../../state/products.actions'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  goToDetails() {
    this.store.dispatch(setSelectedProduct({ product: this.product }))
    this.store.dispatch(setSelectedProductToSessionStorage({ product: this.product }))
    this.router.navigate(['/detail'])
  }
}
