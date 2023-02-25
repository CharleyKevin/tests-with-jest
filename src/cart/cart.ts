import Product from '../products/product';
import { CartProtocol } from './contracts/cart.protocol';

type ITEM_CART = {
  product: Product,
  quantity: number,
}

export default class Cart implements CartProtocol<ITEM_CART> {
  private readonly _items: ITEM_CART[] = [];

  addItem(product: Product): void {
    const index = this._items.findIndex((item) => {
      return product === item.product
    })
    if ( index !== -1 ) {
      this._items[index].quantity += 1
      return
    }

    this._items.push({
      product,
      quantity: 1,
    })
  }

  removeItem(product: Product): void {
    this._items.map((item, index) => {
      if (item.product === product) {
        this._items.splice(index, 1)
      }
    })
  }

  get items(): readonly ITEM_CART[] {
    return this._items;
  }

  total(): number {
    let total = 0;

    this._items.map(item => {
      total += item.product.price * item.quantity;
    })
    return total;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
