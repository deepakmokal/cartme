import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthserviceService } from '../service/authservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retunValue: any =''
  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthserviceService,
              private route: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger;
    
  let isPresent =  this.authService.checkUser(this.loginForm.value).subscribe( data => {
    this.retunValue = data;
    if(this.retunValue[0].password == this.loginForm.controls['password'].value){
      console.log('User Found');
      this.route.navigate(['/Products'])
      localStorage.setItem('token', 'fakeToken');
      
    }
    else{
      console.log('User not Found');
      alert("Invalid Credential, User not found!")
    }
  });
    
    
    // TODO: Use EventEmitter with form value
   
  }
  

}
