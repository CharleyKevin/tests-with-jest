import Product from "../products/product"
import Cart from "./cart"

const makeCart = (): Cart => {
  return new Cart
}

const makeProduct = (name: string, price: number): Product => {
  return new Product(name, price)
}

const makeSut = () => {
  const sut = makeCart()

  return {
    sut
  }
}

describe('Cart', () => {
  it('should empty cart when created', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
  })

  it('should be able to add a new item', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(makeProduct('T-Shirt', 19.99))
    sut.addItem(makeProduct('Pants', 29.99))
    expect(sut.items.length).toBe(2)
  })

  it('should has two items in cart, and add same product one', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('T-Shirt', 19.99)
    const product2 = makeProduct('Pants', 29.99)

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(product1)
    sut.addItem(product2)
    expect(sut.items.length).toBe(2)
    sut.addItem(product2)
    expect(sut.items.length).toBe(2)
    expect(sut.items[0].product).toBe(product1)
    expect(sut.items[1].product).toBe(product2)
  })

  it('should be able to remove an item', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('T-Shirt', 19.99)
    const product2 = makeProduct('Pants', 29.99)

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(product1)
    sut.addItem(product2)
    expect(sut.items.length).toBe(2)
    sut.removeItem(product1)
    expect(sut.items.length).toBe(1)
  })

  it('should empty if add two and remove two', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('T-Shirt', 19.99)
    const product2 = makeProduct('Pants', 29.99)

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(product2)
    expect(sut.items.length).toBe(2)
    sut.removeItem(product1)
    sut.removeItem(product2)
    expect(sut.isEmpty()).toBeTruthy()
  })

  it('should total equals 115, with two products', () => {
    const { sut } = makeSut()
    const product1 = makeProduct('T-Shirt', 19)
    const product2 = makeProduct('Pants', 29)

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(product1)
    sut.addItem(product2)
    sut.addItem(product2)
    expect(sut.total()).toBe(115)
  })

  it('should total equals 0, with no products', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    expect(sut.total()).toBe(0)
  })

  it('should clear cart', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(makeProduct('T-Shirt', 6))
    sut.addItem(makeProduct('Pants', 4))
    expect(sut.total()).toBe(10)
    sut.clear()
    expect(sut.isEmpty()).toBeTruthy()
  })

})
