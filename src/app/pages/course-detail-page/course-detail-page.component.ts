import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import { faFilePdf , faVideo, faCoffee, IconDefinition, faFileWord, faCogs} from '@fortawesome/free-solid-svg-icons';
import { SubTopic } from 'src/app/models/sub-topic.model';
import { Content, Class } from 'src/app/models/content.model';
import { MatSidenav } from '@angular/material/sidenav';

export interface CustomContent{
   data: Content;
   icon:IconDefinition;
}

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  public categoryId: number;
  public subTopic: SubTopic;
 
  public intermediary: CustomContent[];
  public basic: CustomContent[];
  public advanced: CustomContent[];


  public languageFilter:string = "English";
  public classFilter:string = "All";
  public audienceFilter:string = "student";
  
  
  public levels = ['basic','intermediary','advanced'];
  public languages: string[];
  public classes: string[];
  public iconType: string[] = ['scorm','pdf','youtube','word'];


  @ViewChild('drawer') sidenav: MatSidenav;
  
  constructor(private contentService :ContentService,private snackbar: MatSnackBar, 
    private activatedRoute: ActivatedRoute,
    public matDialog: MatDialog) { 
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.categoryId = parseInt(params['id']);

      this.contentService.getSubTopicById(this.categoryId).subscribe(subTopic => {
        this.subTopic = subTopic;
        this.clearPrevStateAndSetDefault()
        this.loadFilters();
        this.distributeContent();
      }); 
    });
  }

  clearPrevStateAndSetDefault(){
    this.languageFilter = "English";
    this.audienceFilter = "student";
    this.classFilter = "All";
  }

  ngOnInit(): void {
  }

  loadFilters(){
    let languages = new Set<string>();
    let classes = new Set<string>();

    for(var content of this.subTopic.contents){
      languages.add(content.language);

      for(var cls of content.classes)
        classes.add(cls.name);
    }

    classes.add('All');

    this.languages = Array.from<string>(languages).sort();
    this.classes = Array.from<string>(classes).sort();
  }

  
  isEligibleAfterFiltering(content:Content){
    if (content.audience != this.audienceFilter && content.audience != 'both')
      return false;  
    if (!this.isClassEligible(content.classes))
      return false;  
    if (content.language != this.languageFilter)
      return false;     

    return true;
  }

  isClassEligible(classes:Class[]):boolean{
    for(var cls of classes){
      if(cls.name == this.classFilter || this.classFilter == 'All')
        return true;
    }
    return false;
  }

  assignContentByLevel(content:Content){
    if(content.level == 'basic'){
      this.basic.push({data:content,icon:this.getIcon(content.type)});
    } else if(content.level == 'intermediary'){
      this.intermediary.push({data:content,icon:this.getIcon(content.type)});
    } else{
      this.advanced.push({data:content,icon:this.getIcon(content.type)});
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

  getContentByLevel(level:string):CustomContent[]{
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
      let url = content.url;
      if(content.type=='word')
          url='https://docs.google.com/viewer?url='+content.url+'&embedded=true';
      this.loadDialogBox(url,content.name);
    } 
  }

  getIcon(type:string): IconDefinition{
    if (type == "scorm"){
      return faCogs
    }
    if (type == "pdf"){
      return faFilePdf
    } 
    if (type == "youtube"){
      return faVideo
    } 
    if (type == "word"){
      return faFileWord
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

  onNavBarOpen(){
    document.getElementById('mobile-nav-panel').style.height = '45vh';
    this.sidenav.toggle();
  }

  onNavBarClose(){
    document.getElementById('mobile-nav-panel').style.height = 'fit-content';
    this.sidenav.toggle();
  }
}
