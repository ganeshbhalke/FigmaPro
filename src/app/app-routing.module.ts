import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { SavicesComponent } from './shared/component/savices/savices.component';
import { LatestNewsComponent } from './shared/pages/latest-news/latest-news.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { AboutComponent } from './shared/component/about/about.component';
import { HeadersComponent } from './shared/component/headers/headers.component';

// const routes: Routes = [];
const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },

  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'Lets Talk',
    component: HeadersComponent
  },

  {
    path:'services',
    component: SavicesComponent
  },

  {
    path:'blog',
    component: LatestNewsComponent
  },

  {
    path:'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
