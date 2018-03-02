import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'styleguide',
    component: StyleguideComponent
  },
  {
    path: 'glossary',
    component: GlossaryComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
