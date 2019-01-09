import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NghomeComponent } from './nghome/nghome.component';
import { SingleGalleryComponent } from './single-gallery/single-gallery.component';
import { SingleGalleryItemComponent } from './single-gallery-item/single-gallery-item.component';
import { VideoComponent } from './video/video.component';
import { NlclublistComponent } from './nlclublist/nlclublist.component';
import { NlclubsingleComponent } from './nlclubsingle/nlclubsingle.component';
import { NlclubitemComponent } from './nlclubitem/nlclubitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    DashboardComponent,
    NghomeComponent,
    SingleGalleryComponent,
    SingleGalleryItemComponent,
    VideoComponent,
    NlclublistComponent,
    NlclubsingleComponent,
    NlclubitemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
