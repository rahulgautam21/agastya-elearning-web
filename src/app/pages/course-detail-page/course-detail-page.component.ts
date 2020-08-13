import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { Lesson } from 'src/app/models/lesson.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import { faFilePdf , faVideo, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/models/category.model';
import { SubTopic } from 'src/app/models/sub-topic.model';
import { Topic } from 'src/app/models/topic.model';
import { Content } from 'src/app/models/content.model';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  public categoryId: number;
  public topic: Topic;
  public levels = ['Beginner','Intermediate','Expert'];
  public intermediate: SubTopic[];
  public beginner: SubTopic[];
  public expert: SubTopic[];
  public all: SubTopic[];

  public icon = faFilePdf;

  constructor(private contentService :ContentService,private snackbar: MatSnackBar, 
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog) { 
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.categoryId = parseInt(params['id']);
    });
  }

  ngOnInit(): void {
    this.contentService.getTopicById(this.categoryId.toString()).subscribe(topic => {
      this.topic = topic;
      this.distributeSubTopicsBasedonLevel();
      this.loadView();
      //this.setIcons();
    });

    this.contentService.getAllSubTopics().subscribe(all => {
      this.all = all;
    });
    
  }

  distributeSubTopicsBasedonLevel(){
      let i=0;
      this.beginner = [];
      this.intermediate = [];
      this.expert = [];
      for(var topic of this.topic.subTopics){
        if(i==0){
          this.beginner.push(topic);
        } else if(i==1){
          this.intermediate.push(topic);
        } else{
          this.expert.push(topic);
        }
        i++;
        if(i==3)
          i=0;
      }
     
  }

  loadView() {
    
   
  }

  getSubTopicsByLevel(level:string) :SubTopic[]{
    if(level == 'Intermediate')
      return this.intermediate;
    else if (level == 'Beginner')
      return this.beginner;
    else
      return this.expert;
  }

  getContentBySubTopicId(id:number) :Content[]{
     for(let subtopic of this.all){
       if(subtopic.id == id)
          return subtopic.contents;
     }
  }


  onClick(event: Event, content: Content){
    if(content == null) {
      this.snackbar.open("Data not present");
     
    } else {
      this.loadDialogBox(content.url,content.name);
    } 
  }

  // setIcons() {
  //   for( let section of this.sections) {
  //     for (let lesson of section.lessons) {
  //          let url: String = lesson.contentng[0].url;
  //          if (url.endsWith(".pdf")){
  //             this.icon = faFilePdf
  //          } else if (url.includes("youtube")) {
  //             this.icon = faVideo
  //          } else {
  //             this.icon = faCoffee
  //          }
  //     }
  //   }
  // }

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
