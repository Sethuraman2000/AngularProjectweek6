import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
const routes: Routes = [                     //Routing is defined here....!



{path: 'gallery', component: GalleryComponent},

{path: 'form-demo', component: FormDemoComponent},



{path: 'contact', component: ContactComponent},



{path: 'home', component: HomeComponent},


{path: 'header', component: HeaderComponent},


{path: 'footer', component: FooterComponent},

{path: 'product', component: ProductComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '', component: HomeComponent},
{path: '**', component: ErrorpageComponent},









];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
