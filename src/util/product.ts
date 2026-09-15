import { Product } from "../types/product"
import { Subscription } from "../types/subscription"

export const findProductAndConvertWithReduce = (
  products: Product[],
  searchString: string
): Subscription | null => {
  return products.reduce<Subscription | null>((acc, product) => {
    if (acc === null && product.title.includes(searchString)) {
      return { speed: product.title, price: product.prices.regularPrice }
    }
    return acc
  }, null)
}
