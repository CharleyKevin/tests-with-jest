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

  it('should be able to remove an item', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(makeProduct('T-Shirt', 19.99))
    sut.addItem(makeProduct('Pants', 29.99))
    expect(sut.items.length).toBe(2)
    sut.removeItem(makeProduct('T-Shirt', 19.99))
    expect(sut.items.length).toBe(1)
  })

  it('should empty if add two and remove two', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(makeProduct('T-Shirt', 19.99))
    sut.addItem(makeProduct('Pants', 29.99))
    expect(sut.items.length).toBe(2)
    sut.removeItem(makeProduct('T-Shirt', 19.99))
    sut.removeItem(makeProduct('Pants', 29.99))
    expect(sut.isEmpty()).toBeTruthy()
  })

  it('should total equals 10, with two products', () => {
    const { sut } = makeSut()

    expect(sut.isEmpty()).toBeTruthy()
    sut.addItem(makeProduct('T-Shirt', 6))
    sut.addItem(makeProduct('Pants', 4))
    expect(sut.total()).toBe(10)
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
