export interface IProduct {
  Id: string
  Name: string
  Description: string
  Categories: IProductCategory[]
  SKU: string
  Prices: IProductPrice[]
}

interface IProductCategory {
  Id: string
  Name: string
}

interface IProductPrice {
  Id: string
  Retailer: IProductRetailer
  Price: number
  Tier: number
  UpdateTime: string
}

interface IProductRetailer {
  Id: string
  Name: string
}
