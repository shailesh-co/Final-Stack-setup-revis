import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserdataComponent } from './userdata/userdata/userdata.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  {
    path:'signup', component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:"user", component:UserdataComponent
  },
  {
    path:"product", component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
