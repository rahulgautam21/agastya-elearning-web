import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Category } from '../models/category.model';
import { closeMenu } from '../header/menuAnimations.js';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: Category[];
  category: Category;
  topic: Topic;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((data) => {
      this.categories = data;
      this.category = this.categories[0];
      this.topic = this.categories[0].topics[0];
    });
  }

  closeMenuAnimation() {
    closeMenu();
  }

  onMouseOverCategory(category: Category) {
    this.category = category;
    if (category.topics) {
      this.topic = category.topics[0];
    } else {
      this.topic = null;
    }
  }

  onMouseOverTopic(topic: Topic) {
    this.topic = topic;
  }
}
