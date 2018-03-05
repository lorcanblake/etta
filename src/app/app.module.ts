import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { IntroComponent } from './home/intro/intro.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { StartComponent } from './home/start/start.component';
import { IconsModule } from './icons/icons.module';
import { PatternsComponent } from './patterns/patterns.component';
import { DemoComponent } from './demo/demo.component';
import { AppConsumerComponent } from './demo/app-consumer/app-consumer.component';
import { AppVendorComponent } from './demo/app-vendor/app-vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    IntroComponent,
    StyleguideComponent,
    StartComponent,
    PatternsComponent,
    DemoComponent,
    AppConsumerComponent,
    AppVendorComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
