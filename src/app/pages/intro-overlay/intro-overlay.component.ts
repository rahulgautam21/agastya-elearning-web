import {
  Component,
  OnInit,
  QueryList,
  ElementRef,
  ViewChildren,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { TimelineLite, TimelineMax } from 'gsap';

@Component({
  selector: 'app-intro-overlay',
  templateUrl: './intro-overlay.component.html',
  styleUrls: ['./intro-overlay.component.scss'],
})
export class IntroOverlayComponent implements OnInit, AfterViewInit {
  @Output()
  animationComplete = new EventEmitter<TimelineMax>();
  // @ViewChildren('top')
  // topOverlays: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    const tl = new TimelineMax({ paused: true, reversed: false });

    tl.to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      delay: 0.5,
      stagger: 0.4,
    })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to('.intro-overlay', 0, {
        css: { display: 'none' },
      });

    this.animationComplete.emit(tl);
  }

  ngOnInit(): void {}
}
