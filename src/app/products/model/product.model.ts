export interface IProduct {
  id: number // needed by json-server (fake api)
  Id: string
  Name: string
  Description: string
  Categories: IProductCategory[]
  SKU: string
  Prices: IProductPrice[]
}

export interface IProductCategory {
  Id: string
  Name: string
}

export interface IProductPrice {
  Id: string
  Retailer: IProductRetailer
  Price: number
  Tier: number
  UpdateTime: string
}

export interface IProductRetailer {
  Id: string
  Name: string
}
