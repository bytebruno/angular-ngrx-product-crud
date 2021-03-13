import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../environments/environment'
import { IProduct } from './model/product.model'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  SELECTED_PRODUCT_KEY = 'selectedProduct'

  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.API_URL}/product`)
  }

  getOne(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.API_URL}/product/${productId}`)
  }

  add(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.API_URL}/product`, product)
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${environment.API_URL}/product/${product.id}`, product)
  }

  delete(productId: number): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/product/${productId}`)
  }

  setSelectedProductToSessionStorage(product: IProduct) {
    sessionStorage.setItem(this.SELECTED_PRODUCT_KEY, JSON.stringify(product))
  }

  getSelectedProductFromSessionStorage(): Observable<IProduct | null> {
    let value = sessionStorage.getItem(this.SELECTED_PRODUCT_KEY)
    return value ? of(JSON.parse(value)) : of(null)
  }

  clearSelectedProductFromSessionStorage() {
    return of(sessionStorage.removeItem(this.SELECTED_PRODUCT_KEY))
  }
}
