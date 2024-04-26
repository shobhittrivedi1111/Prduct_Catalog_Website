import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  productList: any;

  constructor() { }
  getProductList() {
    return this.productList;
  }
  setProductList(item: any) {
    this.productList = item;
  }
}
