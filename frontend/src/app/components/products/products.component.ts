import { Component } from '@angular/core';
import { Docs } from 'src/app/models/docs.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  readonly QUERY_LIMIT = 20;

  products: Product[] = [];
  productsLength: number = 0;
  elements: any;
  page: number = 1;

  constructor(
    private _productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  onScroll(): void {
    this.appendData();
  }

  loadData(): void {
    this._productService.getAllProducts(this.page, this.QUERY_LIMIT).subscribe({
      next: response => {
        this.products = response.docs;
        this.productsLength = response.totalDocs;
      },
      error: err => console.log(err),
      complete: () => this.addEventsListeners()
    })
  }

  appendData(): void {
    this.page++;

    this._productService.getAllProducts(this.page, this.QUERY_LIMIT).subscribe({
      next: response => {
        this.products = [...this.products, ...response.docs];
      },
      error: err => console.log(err),
      complete: () => this.addEventsListeners()
    })
  }

  addEventsListeners(): void {
    setTimeout(() => {
      this.elements = document.getElementsByClassName('card');
      const initialValue = (this.page - 1) * this.QUERY_LIMIT;

      for (var i = initialValue; i < this.elements.length; i++) {

        const el = this.elements[i];

        if(el == null)
          continue;

        const img1 = el.querySelector('.img-1');
        const img2 = el.querySelector('.img-2');

        img1.addEventListener('mouseover', () => {
          img1?.classList.toggle('dp-none');
          img2?.classList.toggle('dp-none');
        });
        img1.addEventListener("mouseout", () => {
          img1?.classList.toggle('dp-none');
          img2?.classList.toggle('dp-none');
        });
        img2.addEventListener('mouseover', () => {
          img1?.classList.toggle('dp-none');
          img2?.classList.toggle('dp-none');
        });
        img2.addEventListener("mouseout", () => {
          img1?.classList.toggle('dp-none');
          img2?.classList.toggle('dp-none');
        });
      }

      console.log('a-'+this.page);
    }, 1000);
  }
}

