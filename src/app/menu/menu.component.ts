import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: Category[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
