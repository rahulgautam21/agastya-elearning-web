import { Component } from '@angular/core';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'agastya-elearning';
  dark: true;
  theme = { 'learning-dark-theme': false };
}
