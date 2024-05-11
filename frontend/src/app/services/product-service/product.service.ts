import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Docs } from 'src/app/models/docs.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _webRequestService: WebRequestService
  ) {

  }

  getAllProducts(page: number, limit: number) : Observable<Docs> {
    return this._webRequestService.get( 'products', page, limit );
  }
}
