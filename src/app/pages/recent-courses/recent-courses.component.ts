import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Course } from '../../models/course.model';
import { SubTopic } from '../../models/sub-topic.model';

@Component({
  selector: 'recent-courses',
  templateUrl: './recent-courses.component.html',
  styleUrls: ['./recent-courses.component.scss']
})
export class RecentCoursesComponent implements OnInit {

  @Input()
  vh: number;

  public subTopics : SubTopic[];
  public course1 : SubTopic ;
  public course2 : SubTopic;
  public course3 : SubTopic; 
  public restOfTheCourses : SubTopic[];
  public restOfTheCoursesPlaceholder : Array<any> = new Array(6);
  public restOfTheCoursesMobile : SubTopic[];  

  sortRecentCourses(subtopic1: SubTopic, subtopic2: SubTopic) {
    if ( subtopic1.id < subtopic2.id ){
      return -1;
    }else if ( subtopic1.id > subtopic2.id ){
      return 1;
    }else{
     return 0;
    }
  } 

  constructor(private contentService : ContentService) { }  

  ngOnInit(){
    this.restOfTheCoursesPlaceholder.fill(1);

    this.contentService.getFeaturedSubTopic().subscribe((data: any) => {
      if (data[0].subTopics) {

        this.subTopics = data[0].subTopics;
        this.subTopics.sort(this.sortRecentCourses)

        if(this.subTopics.length > 10){
          this.subTopics = this.subTopics.slice(this.subTopics.length-10, this.subTopics.length)
        }else{
          this.subTopics = this.subTopics.slice(0,this.subTopics.length);
          this.subTopics.reverse;
          let countForFillPending = 10 - this.subTopics.length 
          for(let i =0; i<countForFillPending; i++){
            this.subTopics.push(this.subTopics[0]);
          }
        }
        
        // Reset the Description
        this.subTopics.map(data =>{
            data.description = data.name
        })
        
        //Get Top 3 Courses
        this.course1 = this.subTopics[0];
        this.course2 = this.subTopics[1];
        this.course3 = this.subTopics[2];

        //Courses for rest of the page & mobile
        this.restOfTheCourses = this.subTopics.slice(3,9);
        this.restOfTheCoursesMobile = this.subTopics.slice(0,6)
       
        //Rest of the courses
        this.restOfTheCourses.map(data =>{
          this.contentService
            .getTopicById(data.topic)
            .subscribe((topic:any) => {
              data.name = topic.categories[0].name+" - "+topic.name
          });
        })

        //Course 1
        this.contentService
              .getTopicById(this.course1.topic)
              .subscribe((topic:any) => {
                this.course1.name = topic.categories[0].name+" - "+topic.name
        });

        //Course 2
        this.contentService
            .getTopicById(this.course2.topic)
            .subscribe((topic:any) => {
              this.course2.name = topic.categories[0].name+" - "+topic.name
        });  

        //Course 3
        this.contentService
          .getTopicById(this.course3.topic)
          .subscribe((topic:any) => {
            this.course3.name = topic.categories[0].name+" - "+topic.name
        });

      }
    });
  }

//course1.image?.formats.large.url
  imageFallBackMechanism(course : SubTopic, imageType:string){
    
    if(course && course.image &&  course.image.formats){
      if(imageType =='large'){
         if(course.image.formats.large && course.image.formats.large.url && course.image.formats.large.url.trim() != ""){
          return   course.image.formats.large.url;
         }else if(course.image.formats.medium && course.image.formats.medium.url  && course.image.formats.medium.url.trim() != "" ){
          return course.image.formats.medium.url
         }else if(course.image.formats.small && course.image.formats.small.url  && course.image.formats.small.url.trim() != ""){
          return  course.image.formats.small.url;
         }else{
           return "assets/images/placeholder.png"   
         }
      }else if(imageType =='small'){
        if(course.image.formats.small && course.image.formats.small.url  && course.image.formats.small.url.trim() != ""){
          return  course.image.formats.small.url;
         }else{
           return "assets/images/placeholder.png"   
         }
      }else if(imageType =='thumbnail'){
        if(course.image.formats.thumbnail  && course.image.formats.thumbnail.url  && course.image.formats.thumbnail.url.trim() != ""){
          return  course.image.formats.thumbnail.url;
         }else{
           return "assets/images/placeholder.png"   
         }
      }else{
        return "assets/images/placeholder.png"  
      }
    }else{
      return "assets/images/placeholder.png"
    }
  }



}
