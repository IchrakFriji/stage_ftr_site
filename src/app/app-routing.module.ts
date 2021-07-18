import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { MatchesComponent } from './matches/matches.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [

  { path: '', component: AppContentComponent },
   { path: 'contact', component: ContactComponent  },
   { path: 'about', component:  AboutComponent  },
    { path: 'team', component:  TeamComponent },
    { path: 'matches', component:   MatchesComponent },
    { path: 'news', component:    NewsComponent },

];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

