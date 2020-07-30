import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/models/lesson.model';
import { Section } from 'src/app/models/section.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  public courseId: number;
  public categoryName: String;
  public courseName: String;
  public sections: Section[];
  public course: Course;

  constructor(private contentService :ContentService,private snackbar: MatSnackBar, 
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog) { 
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.courseId = parseInt(params['id']);
    });
  }

  ngOnInit(): void {
    this.contentService.getCourseByCourseID(this.courseId.toString()).subscribe(course => {
      this.course = course;
      this.loadView();
    });

    // var data  = '{   "id": 1,   "name": "Elementary Math Class 1-5",   "description": "Elementary Math for students in Class 1-5",   "requirements": "No requirements",   "objectives": "To familiarize with basic mathematics",   "likes": 0,   "created_at": "2020-07-02T20:41:40.219Z",   "updated_at": "2020-07-03T08:26:43.611Z",   "language": "English",   "class": "Class_1",   "image": {     "id": 16,     "name": "basicmaths",     "alternativeText": "",     "caption": "",     "width": 960,     "height": 830,     "formats": {       "small": {         "ext": ".jpeg",         "url": "https://agastya.blob.core.windows.net/agastya/assets/small_basicmaths_6fe59ae1a1.jpeg",         "hash": "small_basicmaths_6fe59ae1a1",         "mime": "image/jpeg",         "path": null,         "size": 12.78,         "width": 500,         "height": 432       },       "medium": {         "ext": ".jpeg",         "url": "https://agastya.blob.core.windows.net/agastya/assets/medium_basicmaths_6fe59ae1a1.jpeg",         "hash": "medium_basicmaths_6fe59ae1a1",         "mime": "image/jpeg",         "path": null,         "size": 20.43,         "width": 750,         "height": 648       },       "thumbnail": {         "ext": ".jpeg",         "url": "https://agastya.blob.core.windows.net/agastya/assets/thumbnail_basicmaths_6fe59ae1a1.jpeg",         "hash": "thumbnail_basicmaths_6fe59ae1a1",         "mime": "image/jpeg",         "path": null,         "size": 4.35,         "width": 180,         "height": 156       }     },     "hash": "basicmaths_6fe59ae1a1",     "ext": ".jpeg",     "mime": "image/jpeg",     "size": 26.38,     "url": "https://agastya.blob.core.windows.net/agastya/assets/basicmaths_6fe59ae1a1.jpeg",     "previewUrl": null,     "provider": "azure-storage",     "provider_metadata": null,     "created_at": "2020-07-22T07:22:25.463Z",     "updated_at": "2020-07-22T07:22:25.463Z"   },   "teachers": [     {       "id": 2,       "firstName": "Abc",       "lastName": "Xyz",       "title": "Mr",       "introduction": null,       "website": null,       "linkedIn": null,       "email": null,       "likes": null,       "created_at": "2020-07-02T20:50:30.051Z",       "updated_at": "2020-07-02T20:50:30.051Z"     }   ],   "sections": [     {       "id": 1,       "name": " Numbers from 1 to 9",       "description": " Numbers from 1 to 9",       "sequence": 1,       "created_at": "2020-07-02T20:44:25.073Z",       "updated_at": "2020-07-02T20:44:25.073Z",       "lessons": [         {           "id": 1,           "name": "Counting small numbers",           "description": "Counting small numbers",           "sequence": 1,           "created_at": "2020-07-02T20:46:01.665Z",           "updated_at": "2020-07-02T20:46:01.665Z",           "lessonContents": [             {               "id": 1,               "Name": "Counting small numbers",               "url": "https://www.youtube.com/watch?v=y2-uaPiyoxc",               "sequence": 1,               "created_at": "2020-07-09T19:42:59.405Z",               "updated_at": "2020-07-09T19:42:59.405Z",               "content": []             }           ]         },         {           "id": 3,           "name": "Comparing small numbers",           "description": "Comparing small numbers",           "sequence": 2,           "created_at": "2020-07-02T20:46:22.202Z",           "updated_at": "2020-07-02T20:46:22.202Z",           "lessonContents": []         },         {           "id": 4,           "name": "What is addition?",           "description": "What is addition?",           "sequence": 3,           "created_at": "2020-07-02T20:46:35.950Z",           "updated_at": "2020-07-02T20:46:35.950Z",           "lessonContents": []         },         {           "id": 5,           "name": "Making small numbers",           "description": "Making small numbers",           "sequence": 4,           "created_at": "2020-07-02T20:47:12.220Z",           "updated_at": "2020-07-02T20:47:12.220Z",           "lessonContents": []         }       ]     },     {       "id": 2,       "name": "Numbers from 10 to 20",       "description": "Numbers from 10 to 20",       "sequence": 2,       "created_at": "2020-07-02T20:45:11.988Z",       "updated_at": "2020-07-02T20:45:11.988Z",       "lessons": [         {           "id": 6,           "name": "Counting numbers from 1 to 20",           "description": "Counting numbers from 1 to 20",           "sequence": 1,           "created_at": "2020-07-02T20:47:34.134Z",           "updated_at": "2020-07-02T20:47:34.134Z",           "lessonContents": []         },         {           "id": 7,           "name": "Counting objects",           "description": "Counting objects",           "sequence": 2,           "created_at": "2020-07-02T20:47:54.997Z",           "updated_at": "2020-07-02T20:47:54.997Z",           "lessonContents": []         },         {           "id": 8,           "name": "Addition within 20",           "description": "Addition within 20",           "sequence": 3,           "created_at": "2020-07-02T20:48:08.096Z",           "updated_at": "2020-07-02T20:48:08.096Z",           "lessonContents": []         },         {           "id": 9,           "name": "Subtraction within 20",           "description": "Subtraction within 20",           "sequence": 4,           "created_at": "2020-07-02T20:48:21.996Z",           "updated_at": "2020-07-02T20:48:21.996Z",           "lessonContents": []         }       ]     }   ],   "categories": [     {       "id": 1,       "name": "Maths",       "description": "Maths Category",       "featuredCourse": 1,       "created_at": "2020-07-02T20:40:56.389Z",       "updated_at": "2020-07-22T07:10:01.649Z"     }   ] }';
    // this.course = JSON.parse(data);
    // this.loadView();
  }

  loadView() {
    this.categoryName = this.course.categories[0].name;
    this.courseName = this.course.name; 
    this.sections = this.course.sections;
  }

  onClick(event: Event, lesson: Lesson){
    if(lesson[0] == null) {
      this.snackbar.open("Data not present");
     
    } else {
      this.loadDialogBox(lesson[0].url,lesson[0].Name);
    } 
  }

  loadDialogBox(link: String, desc: String) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'myapp-no-padding-dialog';

    dialogConfig.data = {
      url: link,
      title: desc 
    };
    
    this.matDialog.open(DialogBoxComponent, dialogConfig);
    
  }
}
