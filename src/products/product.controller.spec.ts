import ProductRepositoryInterface from "./contracts/product.interface"
import ProductController from "./product.controller"

const makeSut = () => {
  const mockRepository: jest.Mocked<ProductRepositoryInterface> = {
    findAll: jest.fn(),
    save: jest.fn()
  }
  const sut = new ProductController(mockRepository)

  return {
    sut,
    mockRepository
  }
}

describe('ProductController', () => {
  it('should return all products', () => {
    const { sut, mockRepository } = makeSut()
    sut.getAll() 
    expect(mockRepository.findAll).toBeCalledTimes(1)
  })

  it('should save a product', () => {
    const { sut, mockRepository } = makeSut()
    const name = 'Product'
    const price = 10
    sut.store(name, price)
    expect(mockRepository.save).toBeCalledTimes(1)
    expect(mockRepository.save).toHaveBeenCalledWith(name, price)
  })
})
