import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  courses : Course[] = [];
  filteredCourses : Course[] = [];
  categories : Set<string> = new Set();
  classes : Set<string> = new Set();
  languages : Set<string> = new Set();
  selectedLanguage : string;
  selectedClasses : string;
  selectedCategories : string;

  constructor(private contentService : ContentService) { }

  ngOnInit(): void {
    this.languages.add(null);
    this.classes.add(null);
    this.categories.add(null);

    this.contentService.getCourses().subscribe((courses : Course[]) => {
      console.log(courses)
      this.courses = courses;
      this.filteredCourses = courses;
      for(let course of courses){
        course.categories.forEach(data => {this.categories.add(data.name)})
        if(course.class)
          this.classes.add(course.class.toString());
        if(course.language)
          this.languages.add(course.language);
      }
      console.log(this.courses)
      console.log(this.categories)
      console.log(this.classes)
      console.log(this.languages)
    },
    err => {
      console.log("Error Happened on Processing Search Page Request")
    });
  }

  onLanguage(language){
    this.selectedLanguage = language;
    this.filter()
  }

  onClass(paramClass){
    this.selectedClasses = paramClass;
    this.filter()
  }

  onCategory(category){
    this.selectedCategories = category;
    this.filter()
  }

  filter(){
    this.filteredCourses = this.courses;
    if(this.selectedLanguage){
      this.filteredCourses = this.filteredCourses.filter(course => {
        if(course.language){
          console.log(course.language.localeCompare(this.selectedLanguage))
          return !course.language.localeCompare(this.selectedLanguage)
        }
        return -1;
      })
    }
    if(this.selectedClasses){
      this.filteredCourses = this.filteredCourses.filter(course => {
        if(course.class){
          console.log(course.class.toString().localeCompare(this.selectedClasses))
          return !course.class.toString().localeCompare(this.selectedClasses)
        }
        return -1;
      })
    }
    if(this.selectedCategories){
      this.filteredCourses = this.filteredCourses.filter(course => {
        if(course.categories){
          course.categories.forEach(category => {
            return (category.name.toString().localeCompare(this.selectedCategories))
          });
        }
        return -1;
      })
    }
  }

}
