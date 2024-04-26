import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './display/display.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {BrandfilterPipe} from './pipes/brandfilter.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe'
import { BasicAuthHtppInterceptorService } from './shared/basic-auth-htpp-interceptor.service';




@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    DisplayComponent,
    ViewProductComponent,
    BrandfilterPipe,
    PricefilterPipe,
    
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule, NgbModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
