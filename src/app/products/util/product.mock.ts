import { IProduct } from '../model/product.model'

export const MockData: IProduct[] = [
  {
    id: 1,
    Id: '170e64cc-2b71-440e-94fe-90c98cb24abc',
    Name: 'Port Ellen 21yr',
    Description: '21 year old sherry cask Port Ellen',
    Categories: [
      {
        Id: 'ad327ca5-ec10-4051-9b05-43ebaa3157ce',
        Name: 'Whisky',
      },
      {
        Id: '9f4b3e22-a369-4fb7-9832-cf83f0bc3663',
        Name: 'Scotch',
      },
    ],
    SKU: 'PORTELLEN21SHRY',
    Prices: [
      {
        Id: '0efe1c1a-5e9e-4997-8fd8-3facf8092a2a',
        Retailer: {
          Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5d3',
          Name: 'Omnia',
        },
        Price: 1000,
        Tier: 1,
        UpdateTime: '2019-03-08T08:56:24.9171117+01:00',
      },
    ],
  },
  {
    id: 2,
    Id: '170e64cc-2b71-440e-94fe-90c98cb24abz',
    Name: 'Black Label 18yr',
    Description: '18 year old Black Label',
    Categories: [
      {
        Id: 'ad327ca5-ec10-4051-9b05-43ebaa3157cz',
        Name: 'Whisky',
      },
      {
        Id: '9f4b3e22-a369-4fb7-9832-cf83f0bc366z',
        Name: 'Scotch',
      },
    ],
    SKU: 'BLACKLABEL18SHRY',
    Prices: [
      {
        Id: '0efe1c1a-5e9e-4997-8fd8-3facf8092a2z',
        Retailer: {
          Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5dz',
          Name: 'Visual Wallet',
        },
        Price: 2000,
        Tier: 1,
        UpdateTime: '2019-03-05T08:56:24.9171117+01:00',
      },
    ],
  },
]

export const ProductMock: IProduct = {
  id: 1,
  Id: '170e64cc-2b71-440e-94fe-90c98cb24abc',
  Name: 'Port Ellen 21yr',
  Description: '21 year old sherry cask Port Ellen',
  Categories: [
    {
      Id: 'ad327ca5-ec10-4051-9b05-43ebaa3157ce',
      Name: 'Whisky',
    },
    {
      Id: '9f4b3e22-a369-4fb7-9832-cf83f0bc3663',
      Name: 'Scotch',
    },
  ],
  SKU: 'PORTELLEN21SHRY',
  Prices: [
    {
      Id: '0efe1c1a-5e9e-4997-8fd8-3facf8092a2a',
      Retailer: {
        Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5d3',
        Name: 'Omnia',
      },
      Price: 1000,
      Tier: 1,
      UpdateTime: '2019-03-08T08:56:24.9171117+01:00',
    },
  ],
}

export const defaultInitialState = { productsList: MockData, selectedProduct: null, productToEdit: null }
