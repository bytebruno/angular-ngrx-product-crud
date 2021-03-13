import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IProduct } from './model/product.model'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/product')
  }

  createProduct(product: IProduct): Observable<IProduct> {
    console.log(product)
    return this.http.post<IProduct>('/api/product', product)
  }

  setSelectedProductToSessionStorage(product: IProduct) {
    sessionStorage.setItem('selectedProduct', JSON.stringify(product))
  }

  getSelectedProductFromSessionStorage(): Observable<IProduct | null> {
    let value = sessionStorage.getItem('selectedProduct')
    return value ? of(JSON.parse(value)) : of(null)
  }
}
