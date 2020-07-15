import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  facebook = faFacebookSquare;
  insta = faInstagramSquare;
  youtube = faYoutubeSquare;
  twitter = faTwitterSquare;

  constructor() {}

  ngOnInit(): void {}
}
