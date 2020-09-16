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
  ChangeDetectorRef,
} from '@angular/core';
import { Category } from 'src/app/models/category.model';
import CONSTANTS from '../../constants';
import gsap from 'gsap';
import { ContentService } from 'src/app/services/content.service';
import { SubTopic } from 'src/app/models/sub-topic.model';
import { isNumber } from 'util';

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
  displayedTopics: SubTopic[];
  subTopics: SubTopic[];
  placeholder = ['', '', ''];
  start = 0;
  end = 1;

  url = CONSTANTS.CONTENT_SERVICE_URL1;

  constructor(
    private cdr: ChangeDetectorRef,
    private contentService: ContentService
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    this.contentService.getFeaturedSubTopic().subscribe((data: any) => {
      if (data[0].subTopics) {
        this.subTopics = data[0].subTopics;

        this.subTopics.forEach((subTopic) => {
          if (typeof subTopic.topic === 'number') {
            this.contentService
              .getTopicById(subTopic.topic)
              .subscribe((topic) => {
                subTopic.topic = topic;
                // this.cdr.detectChanges();
              });
          }
        });
        this.start = 0;
        this.end = this.subTopics.length;
        this.setTopicsDisplay();
      }
    });
  }

  ngAfterViewInit() {
    this.startAnimation();
  }

  onLeftArrowClick(event) {
    event.stopPropagation();
    if (this.start) {
      this.start--;
    } else {
      this.start = this.end - 1;
    }
    this.setTopicsDisplay();
  }

  onRightArrowClick(event) {
    event.stopPropagation();
    if (this.start >= this.end - 1) {
      this.start = 0;
    } else {
      this.start++;
    }
    this.setTopicsDisplay();
  }

  setTopicsDisplay() {
    let next = this.start;
    this.displayedTopics = [];
    for (let index = 0; index <= 2; index++) {
      this.displayedTopics[index] = this.subTopics[next];
      if (next === this.end - 1) {
        next = 0;
      } else {
        next++;
      }
    }
    // console.log(this.displayedTopics);
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

  slice(str: string, len: number = 25) {
    return str.length > len ? str.slice(0, len + 1) + '..' : str;
  }
}
