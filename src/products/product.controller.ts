import ProductRepositoryInterface from "./contracts/product.interface";

export default class ProductController {
  constructor(private readonly repository: ProductRepositoryInterface) {}

  getAll() {
    return this.repository.findAll();
  }

  store(name: string, price: number) {
    this.repository.save(name, price)
  }
}
