import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template:`
  
  <nav class="w-100 dt pa3 ph5-ns sans-serif">
    <a routerLink="/" (click)="setTitle(title)" class="dtc v-mid serif link black-70 hover-navy no-underline pa3 w-25">
      <img src="favicon.png" class="rotate shadow dib w32 h32 br-100 mr1 v-mid" alt="5ervice logo"> <span class="dn di-ns">{{title}}</span>
    </a>
    <div class="dtc v-mid w-75 pa3 tr-l">
      <a *ngFor="let n of primNav" [routerLink]="n" routerLinkActive="b" (click)="setTitle(title,n)" class="f6 link dib navy dim mr3 mr4-ns ttc">{{n}}</a>
    </div>
  </nav>
<router-outlet></router-outlet>  
  `
})

export class AppComponent {
  title = 'Etta';
  primNav = [ 'styleguide', 'components', 'patterns', 'demo' ]

  public constructor(private titleService: Title ) { }
 
  public setTitle( title: string, subtitle?: string) {
    if(subtitle){
    var newTitle = title + ' / ' + subtitle;
    }else{
      var newTitle = title;
    }

    this.titleService.setTitle(newTitle);
  }
}
