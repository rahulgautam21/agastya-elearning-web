import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { ViewportScroller } from '@angular/common';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'agastya-elearning';
  dark: true;
  theme = { 'learning-dark-theme': false };
  prevPos: number;
  hide: boolean = false;

  constructor(
    private viewPortScroller: ViewportScroller,
    private scrollDispatcher: ScrollDispatcher,
    private cdr: ChangeDetectorRef,
    private viewPortRuler: ViewportRuler,

  ) {
    
  }
  onScroll(event) {
    console.log('scroll', event);
  }

  ngOnInit()	
{
    this.cdr.detectChanges();
    this.prevPos = this.viewPortScroller.getScrollPosition()[1];
    this.scrollDispatcher.scrolled().subscribe(() => {
      if (!this.hide && this.prevPos < this.viewPortScroller.getScrollPosition()[1] && this.viewPortScroller.getScrollPosition()[1] < 50)  {
        this.hide = true;
        this.cdr.detectChanges();
      }

      if (this.hide && this.prevPos >= this.viewPortScroller.getScrollPosition()[1] && this.viewPortScroller.getScrollPosition()[1] < 50) {
        this.hide = false;
        this.cdr.detectChanges();
      }

      this.prevPos = this.viewPortScroller.getScrollPosition()[1];

    });
  }
}
