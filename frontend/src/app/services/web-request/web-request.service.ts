import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product.model';
import { Docs } from 'src/app/models/docs.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private _http: HttpClient) {
    /* TODO: Change for environment.root_url */
    this.ROOT_URL = "http://localhost:3000/api";
  }

  get(uri: string, page: number, limit: number) {
    return this._http.get<Docs>(`${this.ROOT_URL}/${uri}?page=${page}&limit=${limit}`);
  }

  // post(uri: string, payload: Object) {
  //   return this._http.post(`${this.ROOT_URL}/${uri}`, payload);
  // }
}
