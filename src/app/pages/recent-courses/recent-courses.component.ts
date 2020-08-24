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
        

        

        this.course1 = this.subTopics[5];
        this.course2 = this.subTopics[0];
        this.course3 = this.subTopics[4];

        this.restOfTheCourses = this.subTopics.slice(0,6);
        this.restOfTheCoursesMobile = this.subTopics.slice(0,5)


        this.restOfTheCourses.map(data =>{
              data.description = data.name
        })


        this.contentService
              .getTopicById(this.course1.topic)
              .subscribe((topic:any) => {
                this.course1.name = topic.categories[0].name+" - "+topic.name
          });

        this.contentService
            .getTopicById(this.course2.topic)
            .subscribe((topic:any) => {
              this.course2.name = topic.categories[0].name+" - "+topic.name
        });  

        this.contentService
          .getTopicById(this.course3.topic)
          .subscribe((topic:any) => {
            this.course3.name = topic.categories[0].name+" - "+topic.name
      });

      this.restOfTheCourses.map(data =>{
        this.contentService
          .getTopicById(data.topic)
          .subscribe((topic:any) => {
            data.name = topic.categories[0].name+" - "+topic.name
      });
      })


      }
    });
  }



}
