import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { KeralaComponent } from './kerala/kerala.component';
import { AndhraComponent } from './andhra/andhra.component';
import { GoaComponent } from './goa/goa.component';
import { MizoramComponent } from './mizoram/mizoram.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { DelhiComponent } from './delhi/delhi.component';
import { HimachalComponent } from './himachal/himachal.component';
import { MeghalayaComponent } from './meghalaya/meghalaya.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'co1',component:Comp1Component
  },
  {
    path:'co2',component:Comp2Component
  },
  {
    path:'co3',component:Comp3Component
  },
  {
    path:'co4',component:Comp4Component
  },
  {
    path:'co5',component:Comp5Component
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  
  {
    path:'contact',component:ContactusComponent
  },
  {
    path:'tamil_nadu',component:TamilnaduComponent
  },
  {
    path:'mumbai',component:MumbaiComponent
  },
  {
    path:'kerala',component:KeralaComponent
  },
  {
    path:'andhra_pradesh',component:AndhraComponent
  },
  {
    path:'goa',component:GoaComponent
  },
  {
    path:'mizoram',component:MizoramComponent
  },
  {
    path:'gujarat',component:GujaratComponent
  },
  {
    path:'delhi',component:DelhiComponent
  },
  {
    path:'himachal_pradesh',component:HimachalComponent
  },
  {
    path:'meghalya',component:MeghalayaComponent
  },
  {
    path:'ad',component:AdvertiseComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
