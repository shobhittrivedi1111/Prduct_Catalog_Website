import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Product } from '../shared/product';
import { Pincode } from '../shared/pincode';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productcode: any;
  Brand: any;
  Name: any;
  Description: any;
  Price: any;
  ImageUrl: any;
  PinCode!: any;
  NoOfDays: any;
  showAdd!: boolean;
  showError!: boolean;
  pincodeList: any = new Pincode;
  container:any=[];
  allPrice:any=[];







  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showAdd = false;
    this.showError = false;

    this.api.getAllPriceList(sessionStorage.getItem('token'))
    .subscribe({
      next: res => {
        this.allPrice=res;
        this.api.setPriceList(res);
        console.log(res,'prices');
        
      }
    })



    this.api.viewProduct(this.activatedRoute.snapshot.params['productCode'], sessionStorage.getItem("token")).subscribe((result) => {
      console.log(result);
      this.productcode = result[0].productCode;
      this.Brand = result[0].brand;
      this.Name = result[0].name;
      this.Description = result[0].description;
      this.Price = result[0].price;
      this.ImageUrl = result[0].imageUrl;





    })
  }

  deliverService(item: any) {
    this.showAdd = false;
    this.showError = false;
    this.api.deliverProduct(item,sessionStorage.getItem("token")).subscribe(
      data => {
        if (data.length == 0) {
          this.showError = true;


        }
        else {
          this.pincodeList = data;
          this.PinCode = data[0].pincode;
          this.NoOfDays = data[0].noOfDays;
          this.showAdd = true;

        }
      },
      error => {
        console.log("No response");


      }
    )
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
    console.log(val);
   const ans=this.findInArr(this.api.getPriceList(),
  'productCode',val,'price');
   return ans;

  }

  clear(){
    location.reload();
  }

}


