import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './product-components/mobiles/mobiles.component';
import { FashionsComponent } from './product-components/fashions/fashions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutinfoComponent } from './checkoutinfo/checkoutinfo.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path:"mobiles",component: MobilesComponent,canActivate: [AuthGuard]},
  {path:"fashions",component: FashionsComponent,canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent,canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent},
  {path:"checkout-info",component:CheckoutinfoComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"my-account",component:MyaccountComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
