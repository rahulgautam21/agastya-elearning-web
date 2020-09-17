import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TimelineMax, TimelineLite } from 'gsap';
import { ContentService } from 'src/app/services/content.service';
import { Category } from 'src/app/models/category.model';
import { ViewportRuler } from '@angular/cdk/overlay';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  overlayTl: TimelineMax;
  bannerTl: TimelineMax;
  to: any;
  categories: Category[];
  vh: number;
  showOverlay: boolean = true;
  mainTimeLine = new TimelineMax({ paused: true, reversed: false });

  constructor(
    private contentService: ContentService,
    private viewPortRuler: ViewportRuler
  ) {}

  ngAfterViewInit(): void {
    this.bannerTl.play();
    // this.to = setTimeout(() => {
    //   this.overlayTl.play();
    // }, 2000);
  }

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((data) => {
      this.categories = data.filter((cat) => {
        if (cat.featuredCourse) return cat;
      });
    });

    this.vh = this.viewPortRuler.getViewportSize().height;
  }

  ngOnDestroy() {
    clearTimeout(this.to);
  }

  // overlayAnimationComplete(overlayTl: TimelineMax) {
  //   this.overlayTl = overlayTl;
  //   // this.showOverlay = false;
  //   // this.mainTimeLine.add(this.overlayTl);
  //   // this.mainTimeLine.play();
  // }

  bannerAnimationComplete(bannerTl: TimelineMax) {
    this.bannerTl = bannerTl;
    // this.mainTimeLine.add(this.bannerTl);
  }
}
