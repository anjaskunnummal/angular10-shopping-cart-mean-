import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { DatasService } from './services/datas.service';
import { CartService } from './services/cart.service';
import { CheckoutService } from './services/checkout.service';
import { AuthService } from './services/auth.service';
import { SharecartcountService } from './services/sharecartcount.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { GridComponent } from './grid/grid.component';
import { FooterComponent } from './footer/footer.component';
import { MobilesComponent } from './product-components/mobiles/mobiles.component';
import { FashionsComponent } from './product-components/fashions/fashions.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutinfoComponent } from './checkoutinfo/checkoutinfo.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

import{AngularFireModule} from'@angular/fire';
import{AngularFireAuthModule} from'@angular/fire/auth'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { FilterPipe } from './pipes/filter.pipe';
import { RegisterComponent } from './register/register.component';



var firebaseConfig = {
  apiKey: "AIzaSyCrRv1xmDbxJxhFPcPY3vgpLG15rIZ1Mgs",
  authDomain: "shopdo-project.firebaseapp.com",
  databaseURL: "https://shopdo-project.firebaseio.com",
  projectId: "shopdo-project",
  storageBucket: "shopdo-project.appspot.com",
  messagingSenderId: "765986298622",
  appId: "1:765986298622:web:4671211673155e8c7da3af",
  measurementId: "G-4061T42BX3"
};



@NgModule({
  declarations: [									
    AppComponent,
      HomeComponent,
      ProductItemComponent,
      GridComponent,
      FooterComponent,
      MobilesComponent,
      FashionsComponent,
      CartComponent,
      CheckoutComponent,
      CheckoutinfoComponent,
      MyaccountComponent,
      LoginComponent,
      FilterPipe,
      RegisterComponent
   ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [DatasService,CartService,SharecartcountService,CheckoutService,AuthService,AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
