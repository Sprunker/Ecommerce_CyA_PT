export class Product {
  constructor(
    public name: string,
    public image1: string,
    public image2: string,
    public swatchesList: Array<[key: string]>,
    public price: number
  )
  {

  }
}
