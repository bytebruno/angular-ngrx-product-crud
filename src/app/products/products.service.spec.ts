import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { IProduct } from './model/product.model'
import { ProductsService } from './products.service'
import { MockData } from './util/product.mock'

describe('ProductsService', () => {
  let service: ProductsService, httpTestingController: HttpTestingController

  const initialState = {}

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({ initialState }), ProductsService],
    })
    service = TestBed.inject(ProductsService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should retrieve all products', () => {
    service.getAll().subscribe((products: any) => {
      expect(products).toBeTruthy('No products returned')
      expect(products.length).toBe(2, 'incorrect number of products')
      const product = products[0]
      expect(product.Name).toBe('Port Ellen 21yr')
    })
    const req = httpTestingController.expectOne('/api/product')
    expect(req.request.method).toEqual('GET')
    req.flush({ payload: Object.values(MockData) })
  })

  it('should find a product by id', () => {
    service.getOne(1).subscribe((product) => {
      expect(product).toBeTruthy('The product was not found')
      expect(product.id).toBe(1)
    })

    const req = httpTestingController.expectOne('/api/product/1')
    expect(req.request.method).toEqual('GET')
    req.flush(MockData[0])
  })

  it('should update the product', () => {
    const changes: IProduct = {
      ...MockData[0],
      Name: 'New name of product',
    }

    service.update(changes).subscribe((product) => {
      expect(product.id).toBe(1)
    })

    const req = httpTestingController.expectOne('/api/product/1')
    expect(req.request.method).toEqual('PUT')
    expect(req.request.body.Name).toEqual(changes.Name)

    req.flush({ ...MockData[0], ...changes })
  })

  afterEach(() => {
    httpTestingController.verify()
  })
})
