import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {AuthserviceService} from './service/authservice.service';
import { CartService } from './service/cart.service';
import { ProductsService } from './service/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product-app';

  constructor(private router: Router, 
    public authService: AuthserviceService, private products: ProductsService,
    public cart: CartService
    ){}
  logout(){
    localStorage.clear();
     this.router.navigate(['/login']);
  }

  
  
  ngOnInit(){
    
  }

}
