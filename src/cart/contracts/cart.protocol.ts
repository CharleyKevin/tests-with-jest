import Product from "../../products/product"

export interface CartProtocol<T> {
  addItem(item: Product): void
  removeItem(item: Product): void
  get items(): readonly T[]
  total(): number
  isEmpty(): boolean
}
