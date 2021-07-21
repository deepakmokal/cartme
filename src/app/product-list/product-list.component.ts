import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import {ProductsService} from '../service/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any = ''
  constructor(private products: ProductsService, 
    private router: Router,
    public cart: CartService) { }

  viewProduct(event:any){
    debugger;
    let itemId =  event.currentTarget.id;
    localStorage.setItem("itemId", itemId);
    this.router.navigate(['/vw_product']);
    // let elementId: string = (event.target as Element).id;
    // alert(elementId)
  }

  ngOnInit(): void {
      this.products.getAllProductList().subscribe(data => {
      this.productList = data;
      
  });

}
}
