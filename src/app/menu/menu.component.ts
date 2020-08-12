import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Category } from '../models/category.model';
import { closeMenu } from '../header/menuAnimations.js';
import { Topic } from '../models/topic.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  menuState: string = 'Categories';
  title: string = 'Categories';
  categories: Category[];
  category: Category;
  topic: Topic;
  handSet: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.handSet = true;
        }
      });
    this.contentService.getCategories().subscribe((data) => {
      this.categories = data;
      this.category = this.categories[0];
      this.topic = this.categories[0].topics[0];
    });
  }

  closeMenuAnimation() {
    closeMenu();
  }

  setTitle() {
    switch (this.menuState) {
      case 'Topics':
        this.title = this.category.name;
        break;
      case 'Sub-Topics':
        this.title = this.topic.name;
        break;
      default:
        this.title = 'Categories';
    }
  }

  onMouseOverCategory(category: Category) {
    this.category = category;
    if (category.topics) {
      this.topic = category.topics[0];
    } else {
      this.topic = null;
    }
  }

  onClickCategory(category: Category) {
    if (this.handSet) {
      this.category = category;
      if (category.topics) {
        this.topic = category.topics[0];
      } else {
        this.topic = null;
      }
      this.menuState = 'Topics';
      this.setTitle();
    }
  }

  onClickShowAllCategories() {
    this.menuState = 'Categories';
    this.setTitle();
  }

  onMouseOverTopic(topic: Topic) {
    this.topic = topic;
  }

  onClickTopic(topic: Topic) {
    if (this.handSet) {
      this.topic = topic;
      this.menuState = 'Sub-Topics';
      this.setTitle();
    }
  }

  onClickShowAllTopics() {
    this.menuState = 'Topics';
    this.setTitle();
  }
}
