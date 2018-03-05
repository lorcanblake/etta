import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { StyleguideComponent } from './styleguide/styleguide.component';;
import { PatternsComponent } from './patterns/patterns.component';
import { DemoComponent } from './demo/demo.component';
import { AppConsumerComponent } from './demo/app-consumer/app-consumer.component';
import { AppVendorComponent } from './demo/app-vendor/app-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'styleguide',
    component: StyleguideComponent,
    data: { title: 'Etta / Styleguide' },
    pathMatch: 'prefix'
  },
  {
    path: 'components',
    component: ComponentsComponent,
    data: { title: 'Etta / Components' },
    pathMatch: 'prefix'
  },
  {
    path: 'patterns',
    component: PatternsComponent,
    data: { title: 'Etta / Patterns' },
    pathMatch: 'prefix'
  },
  {
    path: 'demo',
    component: DemoComponent,
    data: { title: 'Etta / Demo' }
  },
  {
    path: 'demo/5ervice',
    component: AppConsumerComponent,
    data: { title: 'Etta / 5ervice' }
  },
  {
    path: 'demo/5ervice-business',
    component: AppVendorComponent,
    data: { title: 'Etta / 5ervice Business' }
  },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
