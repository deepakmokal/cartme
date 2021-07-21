import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  badgeCounter = 0;
  addToCart(){
    return this.badgeCounter = this.badgeCounter + 1;
   }
  constructor() { }
}
