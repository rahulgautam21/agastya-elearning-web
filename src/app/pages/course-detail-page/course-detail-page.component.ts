import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { Lesson } from 'src/app/models/lesson.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import { faFilePdf , faVideo, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { SubTopic } from 'src/app/models/sub-topic.model';
import { Content } from 'src/app/models/content.model';


@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  public categoryId: number;
  public subTopic: SubTopic;
 
  public intermediary: Content[];
  public basic: Content[];
  public advanced: Content[];
  public icon = faFilePdf;


  public languageFilter:string = "English";
  public classFilter:string;
  public levelFilter:string;
  public audienceFilter:string = "both";
  
  
  public levels = ['basic','intermediary','advanced'];
  public languages: string[] = ['English','Hindi','Sanskrit'];
  public classes: string[] = ['Class-1','Class-2','Class-3'];


  constructor(private contentService :ContentService,private snackbar: MatSnackBar, 
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog) { 
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.categoryId = parseInt(params['id']);
    });
  }

  ngOnInit(): void {
    this.contentService.getSubTopicById(this.categoryId).subscribe(subTopic => {
      this.subTopic = subTopic;
      this.distributeContent();
    });
  }

  
  isEligibleAfterFiltering(content:Content){
    if (content.audience != this.audienceFilter)
      return false;
    if (this.levelFilter != undefined && content.level != this.levelFilter )
      return false;  
    // if (content.class != this.classFilter)
    //   return false;    
    if (content.language != this.languageFilter)
      return false;     

    return true;
  }

  assignContentByLevel(content:Content){
    if(content.level == 'basic'){
      this.basic.push(content);
    } else if(content.level == 'intermediary'){
      this.intermediary.push(content);
    } else{
      this.advanced.push(content);
    }
  }

  distributeContent(){

    this.basic = [];
    this.intermediary = [];
    this.advanced = [];

    for(var content of this.subTopic.contents){
      if(this.isEligibleAfterFiltering(content)){
        this.assignContentByLevel(content)
      }
    }
  }

  getContentByLevel(level:string):Content[]{
    if(level == 'basic')
      return this.basic;
    else if(level == 'intermediary')
      return this.intermediary;
    else  
      return this.advanced;
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
