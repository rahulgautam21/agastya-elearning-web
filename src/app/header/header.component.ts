import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from '../services/content.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TimelineMax } from 'gsap';
import { openMenu, closeMenu } from './menuAnimations.js';
import { ViewportRuler } from '@angular/cdk/overlay';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // searchInput: string;
  categories: any;
  // showSearch = false;
  menuState = 'close';
  handSet = false;
  vw: number;
  vh: number;
  tl1 = new TimelineMax({ paused: true, reversed: true });

  constructor(
    private contentService: ContentService,
    private breakpointObserver: BreakpointObserver,
    private viewPortRuler: ViewportRuler
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.activateHandsetLayout();
        }
      });
    this.vw = this.viewPortRuler.getViewportSize().width;
    this.vh = this.viewPortRuler.getViewportSize().height;

    //sroll animation
    gsap.to('.header', {
      scrollTrigger: {
        trigger: '.hdrlogo', // start the animation when ".box" enters the viewport (once)
        scrub: true,
        refreshPriority: 1,
        // markers: true,
        start: 'top 4%', // when the top of the trigger hits the top of the viewport
      },
      y: -150,
      duration: 0.1,
    });
  }

  ngAfterViewInit() {}

  activateHandsetLayout() {
    this.handSet = true;
    // this.showSearch = false;
  }

  // search(event) {
  //   if (this.searchInput) {
  //     this.categories = this.contentService.searchCategories(this.searchInput);
  //   }
  // }

  // show(event) {
  //   if (!this.showSearch) {
  //     this.tl1
  //       .to('.mobile-search', 0, {
  //         css: { display: 'none' },
  //       })
  //       .to('.search', 1, {
  //         css: { width: this.handSet ? '24vw' : '20vw', display: 'block' },
  //         ease: 'easeOut',
  //       });

  //     this.showSearch = true;
  //     this.tl1.play();
  //   }
  // }

  // close(event) {
  //   if (
  //     typeof event.target.className === 'string' &&
  //     event.target.className.includes('mobile-search')
  //   )
  //     return;

  //   if (this.showSearch) {
  //     this.tl1
  //       .to('.search', 0.5, {
  //         css: { width: 0 },
  //         ease: 'easeOut',
  //       })
  //       .to('.mobile-search', 0, {
  //         css: { display: 'block' },
  //         delay: -0.3,
  //       })
  //       .to('.search', 0, {
  //         css: { display: 'none' },
  //         delay: -0.3,
  //       });

  //     this.showSearch = false;
  //     this.tl1.play();
  //   }
  // }

  openMenuBar() {
    this.menuState = 'open';
    // gsap.to('.mobile-search', 0, { css: { display: 'none' }, delay: 0.5 });
    openMenu(this.vw, this.vh, 0.3, this.handSet);
  }

  closeMenuBar() {
    this.menuState = 'close';
    closeMenu(this.handSet);
    // gsap.to('.mobile-search', 0, { delay: 1, css: { display: 'block' } });
  }
}
