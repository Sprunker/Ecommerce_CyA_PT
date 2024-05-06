import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private _productService: ProductService
  ) {}

  products: Product[] = [];
  elements: any;

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((res) => {
      this.products = res;
    },
    (error) => {
      console.error(error);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.elements = document.getElementsByClassName('card');

      for (var i = 0; i < this.elements.length; i++) {
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
    }, 1000);
  }
}
  // ngAfterViewInit(): void {

  //   }

