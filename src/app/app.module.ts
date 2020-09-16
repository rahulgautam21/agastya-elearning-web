import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { IntroOverlayComponent } from './pages/intro-overlay/intro-overlay.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ViewportRuler } from '@angular/cdk/scrolling';

import { LayoutModule } from '@angular/cdk/layout';
import { ClickOutsideDirective } from './utility/click-outside.directive';
import { ArrowLeftComponent } from './svg/arrow-left/arrow-left.component';
import { ArrowRightComponent } from './svg/arrow-right/arrow-right.component';
import { ImagePreloadDirective } from './utility/image-preload.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { UparrowCircleComponent } from './svg/uparrow/uparrow-circle/uparrow-circle.component';
import { DialogBoxComponent } from './pages/course-detail-page/dialog-box/dialog-box.component';
import { RecentCoursesComponent } from './pages/recent-courses/recent-courses.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent,
    LandingPageComponent,
    AboutusPageComponent,
    CourseDetailPageComponent,
    PageNotFoundComponent,
    BannerComponent,
    FeaturedComponent,
    IntroOverlayComponent,
    ClickOutsideDirective,
    ArrowLeftComponent,
    ArrowRightComponent,
    ImagePreloadDirective,
    MenuComponent,
    UparrowCircleComponent,
    DialogBoxComponent,
    RecentCoursesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    LayoutModule,
    FontAwesomeModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSidenavModule,
    MatChipsModule
  ],
  providers: [HttpClient, ViewportRuler],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent],
})
export class AppModule {}
