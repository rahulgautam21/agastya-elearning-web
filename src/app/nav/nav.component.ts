import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  categories: Category[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService
      .getCategories()
      .subscribe((cat) => (this.categories = cat));
  }
}
