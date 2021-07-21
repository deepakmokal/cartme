import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AuthGuard} from './auth.guard';
import {ProductDetailsComponent} from './product-details/product-details.component'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "Products", canActivate : [AuthGuard], component: ProductListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: "vw_product", canActivate : [AuthGuard], component: ProductDetailsComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
