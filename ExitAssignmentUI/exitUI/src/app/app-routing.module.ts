import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'user-login', component:UserLoginComponent},
  {path:'user-registration', component:UserRegistrationComponent},
  {path:'display', component:DisplayComponent},
  {path:'view-product/:productCode', component:ViewProductComponent,canActivate:[AuthGuard]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
