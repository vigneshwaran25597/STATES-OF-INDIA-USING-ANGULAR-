import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    TamilnaduComponent,
    MumbaiComponent,
    KeralaComponent,
    AndhraComponent,
    GoaComponent,
    MizoramComponent,
    GujaratComponent,
    DelhiComponent,
    HimachalComponent,
    MeghalayaComponent,
    AdvertiseComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
