import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  @Output()
  animationComplete = new EventEmitter<TimelineMax>();
  constructor() {}

  ngAfterViewInit(): void {
    const tl = new TimelineMax({ paused: true, reversed: false });

    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 1,
      },
    });

    this.animationComplete.emit(tl);
  }

  ngOnInit(): void {}
}
