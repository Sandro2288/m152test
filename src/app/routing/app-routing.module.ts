import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';
import { SingleGalleryComponent } from '../single-gallery/single-gallery.component';
import { VideoComponent } from '../video/video.component';
import { NlclublistComponent } from '../nlclublist/nlclublist.component';
import { NlclubsingleComponent } from '../nlclubsingle/nlclubsingle.component';


const routes: Routes = [
 { path: 'ng', component: NghomeComponent},
 { path: 'hw', component: HelloworldComponent},
 { path: '',  component: DashboardComponent},
 { path: 'vid', component: VideoComponent},
 { path: 'nlclub', component: NlclublistComponent},
 { path: 'nlclub/:id',  component: NlclubsingleComponent},
];

@NgModule ({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}