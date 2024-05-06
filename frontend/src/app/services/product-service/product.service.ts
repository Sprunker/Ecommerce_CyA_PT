import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _webRequestService: WebRequestService
  ) {

  }

  getAllProducts() : Observable<Product[]> {
    return this._webRequestService.get('products').pipe(map(product => {
      return product;
    }));
  }
}
