import {
  Component,
  OnInit,
  AfterContentChecked,
  AfterViewInit,
} from '@angular/core';
import { TimelineMax, TimelineLite } from 'gsap';
import { stagger } from '@angular/animations';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  overlayTl: TimelineMax;
  bannerTl: TimelineMax;
  to: any;
  categories: import('c:/Users/Admin/workspace/agastya/agastya-elearning-ui/src/app/models/category.model').Category[];

  constructor(private contentService: ContentService) {}

  ngAfterViewInit(): void {
    this.bannerTl.play();
    this.to = setTimeout(() => {
      this.overlayTl.play();
    }, 2000);
  }

  ngOnInit(): void {
    this.contentService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  overlayAnimationComplete(overlayTl: TimelineMax) {
    this.overlayTl = overlayTl;
  }

  bannerAnimationComplete(bannerTl: TimelineMax) {
    this.bannerTl = bannerTl;
  }
}
