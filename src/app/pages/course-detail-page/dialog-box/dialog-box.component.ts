import { Component, OnInit, Inject } from '@angular/core';
import { CourseDetailPageComponent } from '../course-detail-page.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  public url: SafeResourceUrl;
  public title: String;

  constructor(private dialogRef: MatDialogRef<CourseDetailPageComponent>,
    @Inject(MAT_DIALOG_DATA) data, private _sanitizer: DomSanitizer) { 
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);;
      this.title = data.title;
    }

  ngOnInit(): void {
    
  }

  close(event: Event) {
    this.dialogRef.close();
  }

}
