import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { IProduct } from '../../model/product.model'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct

  constructor() {}

  ngOnInit(): void {
    if (this.product) console.log(this.product)
  }
}
