import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http: HttpClient) { }

  checkUser(formdata: any){
    debugger;
   let username = formdata.userName;
   let password = formdata.password
    
   return this.http.get(`http://localhost:3000/users?username=${username}`)
  }

  isAuthenticated(){
    let token = localStorage.getItem('token');
    return token != null;
  }
}



//http://localhost:3000/users?username=admin