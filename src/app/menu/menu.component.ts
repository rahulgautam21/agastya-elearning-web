import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Category } from '../models/category.model';
import { openMenu, closeMenu } from '../header/menuAnimations.js';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: Category[];
  category: Category;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((data) => {
      this.categories = data;
      this.category = this.categories[0];
      console.log(this.categories);
    });
  }

  closeMenuAnimation() {
    closeMenu();
  }

  onMouseOver(category: Category) {
    this.category = category;
  }

  onMouseOut() {}
}
