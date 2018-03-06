import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
  <section class="ph3 ph5-ns w-100 pv2">
    <div class="tc-l mv4 pv4 ph3 mw9 center">
      <h2 class="fw1 f5 f4-m f3-l mv4 lh-copy center-l measure-l">
        {{foreward}}, 
        <span class="fw7 navy bb bw2 b--pink">{{title}}</span> 
        {{description}}
      </h2>
      <a href="{{url}}" class="shadow f7 f6-ns fw7 no-underline grow dib v-mid navy ba b--black-60 br-pill ph4 pv2 mb3"><i-download class="v-mid f7 f6-ns"></i-download> {{cta}}</a>
    </div>
  </section>
  `
})
export class IntroComponent {
  foreward = 'Built on Tachyons'
  title = "Etta"
  description = 'is our front-end HQ, providing consistent user experience across the 5ervice platform.'
  url = 'https://raw.githubusercontent.com/lorcanblake/etta/master/src/css/etta.min.css'
  cta = 'Download v0.0.1'
}
