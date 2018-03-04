import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { StyleguideComponent } from './styleguide/styleguide.component';;
import { PatternsComponent } from './patterns/patterns.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'styleguide',
    component: StyleguideComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'components',
    component: ComponentsComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'patterns',
    component: PatternsComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'demo',
    component: DemoComponent,
    pathMatch: 'prefix'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
