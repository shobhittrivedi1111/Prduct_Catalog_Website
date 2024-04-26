import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Product } from '../shared/product';
import { CategoryService } from '../shared/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  productList: any = new Product;
  Brand:any=[];
  minR:any;
  maxR:any;
  container:any=[];
  allPrice:any=[];
  minPrice:any;
  maxPrice:any;
  selectedBrand:any;
  formValue:FormGroup =new FormGroup({
minR:new FormControl(''),
maxR:new FormControl('')
  })
  constructor(private router: Router, private api: ApiService,private catg:CategoryService) {

  }

ngOnInit(): void {
  this.api.getAllPriceList(sessionStorage.getItem('token'))
  .subscribe({
    next: res => {
      this.allPrice=res;
      this.api.setPriceList(res);
      console.log(res,'prices');
      
    }
  })
  this.selectedBrand = '';
  this.api.viewAllProducts().subscribe({
    next: data => {
      this.productList = data;
      this.catg.setProductList(data);
      console.log(this.productList);
      for (let item of this.catg.getProductList()) {
        let val=this.getPrice(item.productCode);
        console.log(item.productCode,val);
        item.price=val;
    
      }
      console.log(this.allPrice);
      
      
    }
    , error: err => {

    }, complete: () => {
      this.Brand = [];
      for (var b of this.productList) {
        this.Brand.push(b.brand);
      }
      this.Brand = Array.from(new Set(this.Brand));
  
    },



  })
}


doSearch(value: string) {
  this.api.searchProductsList(value).subscribe({
    next: data => {
      this.productList = data;
      this.catg.setProductList(data);
      for (let item of this.catg.getProductList()) {
        let val=this.getPrice(item.productCode);
        console.log(item.productCode,val);
        item.price=val;
      }
    }
    , error: err => {

    }, complete: () => {
      this.productList = this.catg.getProductList();
      this.Brand = [];
      for (var b of this.productList) {
        this.Brand.push(b.brand);
      }
      this.Brand = Array.from(new Set(this.Brand));
    },
  })
}


logout() {
  this.api.logOut();
  this.router.navigate(["display"]);
  location.reload();
}
clearAllFilters() {
  location.reload();

}

viewDetails(code: any) {
  this.router.navigate(["view-product"]);
}
home() {
  location.reload();
}
Modal() {
  this.minPrice = this.formValue.value.minR;
  this.maxPrice = this.formValue.value.maxR;
}



LoggedIn() {
  return this.api.isUserLoggedIn();
}
login() {
  this.router.navigate(["user-login"])

}
findInArr(data:any, reqField:any, value:any, resField:any) {
  this.container = data;
   for (var i = 0; i < this.container?.length; i++) {
     if (this.container[i][reqField] == value) {  
         return(this.container[i][resField]);
     }
 }
 
}
getPrice(val:any){
  // console.log(val);
 const ans=this.findInArr(this.api.getPriceList(),
'productCode',val,'price');
 return ans;
}

}