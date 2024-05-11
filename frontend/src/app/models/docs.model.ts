import { Product } from "./product.model"

export class Docs {
  constructor(
    public docs: Array<Product> = new Array<Product>(),
    public totalDocs: number = 0,
    public limit: number = 0,
    public totalPages: number = 0,
    public page: number = 0,
    public pagingCounter: number = 0,
    public hasPrevPage: boolean = false,
    public hasNextPage: boolean = false,
    public prevPage: any = null,
    public nextPage: any = null
  )
  {
  }
}
