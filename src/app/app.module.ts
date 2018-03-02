import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { IntroComponent } from './home/intro/intro.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { StartComponent } from './home/start/start.component';
import { ExamplesComponent } from './examples/examples.component';
import { InterfaceAComponent } from './examples/interface-a/interface-a.component';
import { InterfaceBComponent } from './examples/interface-b/interface-b.component';
import { PublicComponent } from './examples/interface-a/public/public.component';
import { VendorComponent } from './examples/interface-b/vendor/vendor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    IntroComponent,
    GlossaryComponent,
    StyleguideComponent,
    StartComponent,
    ExamplesComponent,
    InterfaceAComponent,
    InterfaceBComponent,
    PublicComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
