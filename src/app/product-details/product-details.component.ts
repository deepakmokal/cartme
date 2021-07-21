import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  item_id:any  = '';
  prod_title: any = '';
  data_prod:any = ''
  

 

  constructor(private products: ProductsService, 
    private router: Router,
    public cart: CartService) { }

  ngOnInit(): void {
    debugger;
    this.products.getProductByID().subscribe(data => {
     this.data_prod = data;

      console.log(data);
  });


  // console.log(this.data_prod)
  
  }
  

}
