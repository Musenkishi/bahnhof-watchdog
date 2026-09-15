export type Discount = {
  availableOnlyWithBroadband: boolean
  inBundle: boolean
  hidden: boolean
  free: boolean
  price: number
  setupFee: number
  article: string | null
  discountPeriod: string | null
}

export type Campaign = {
  id: number
  title: string
  type: string
  description: string | null
}

export type Param = {
  name: string
  value: string
}

export type Category = {
  id: number
  type: string
  title: string
  description: string
  hidden: boolean
}

export type ProductNetwork = {
  city: string
  id: string
  network: string
}

export type BroadbandSpeed = {
  download: number
  upload: number
}

export type Prices = {
  setupFee: number
  regularPrice: number
  discountedPrice: number
}

export type Product = {
  broadbandSpeed: BroadbandSpeed
  inBundle: boolean
  contractPeriod: number | null
  remoteId: string
  id: string
  title: string
  shortTitle: string
  shortLabel: string
  description: string
  shortDescription: string
  prices: Prices
}

export type ProductsData = {
  products: Product[]
  hasOtherProducts: boolean
}
