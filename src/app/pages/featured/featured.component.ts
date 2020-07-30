import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  TemplateRef,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Category } from 'src/app/models/category.model';
import CONSTANTS from '../../constants';
import gsap from 'gsap';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  @ViewChildren('placeholder1')
  pl1: QueryList<ElementRef>;

  @ViewChildren('placeholder2')
  pl2: QueryList<ElementRef>;

  @Input()
  title: string = 'Featured Courses';

  @Input()
  vh: number;

  @Input()
  categories: Category[];
  featuredCat: Category[];
  placeholder = ['', '', ''];
  start = 0;
  end = 1;

  url = CONSTANTS.CONTENT_SERVICE_URL1;

  constructor() {}

  ngOnChanges() {
    if (this.categories) {
      this.start = 0;
      this.end = this.categories.length;
      this.setFeatured();
    }
  }

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    gsap.to(
      this.pl1.toArray().map((el) => el.nativeElement),
      0.5,
      {
        opacity: 0,
        ease: 'expo.inOut',
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.to(
      this.pl2.toArray().map((el) => el.nativeElement),
      0.5,
      {
        opacity: 0,
        ease: 'expo.inOut',
        yoyo: true,
        repeat: -1,
      }
    );
  }

  onLeftArrowClick(event) {
    event.stopPropagation();
    if (this.start) {
      this.start--;
    } else {
      this.start = this.end - 1;
    }
    this.setFeatured();
  }

  onRightArrowClick(event) {
    event.stopPropagation();
    if (this.start >= this.end - 1) {
      this.start = 0;
    } else {
      this.start++;
    }
    this.setFeatured();
  }

  setFeatured() {
    let next = this.start;
    this.featuredCat = [];
    for (let index = 0; index <= 2; index++) {
      this.featuredCat[index] = this.categories[next];
      if (next === this.end - 1) {
        next = 0;
      } else {
        next++;
      }
    }
    // this.featuredCat = null;
  }
}
