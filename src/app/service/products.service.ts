import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  id:any = ''
 
  baseUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getAllProductList(){
      return this.http.get(`${this.baseUrl}`)
  }

  getProductByID(){
    debugger
    this.id = localStorage.getItem("itemId");
    return this.http.get(`${this.baseUrl}?id=${this.id}`);
  }

 
}
