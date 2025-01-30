import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component'; 
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '',
     component: HomeComponent }, 
  { 
    path: 'create-post', 
    component: CreatePostComponent 
  },
  { 
    path: 'view-all', 
    component: ViewAllComponent 
  },
  { 
    path: 'view-post/:id', 
    component: ViewPostComponent
  },
  
  { path: 'search-by-name', 
    component: SearchByNameComponent },
  
];