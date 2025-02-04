import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './AngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { PostService } from './service/post.service';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllComponent,
    ViewPostComponent,
    SearchByNameComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    AppRoutingModule,
    RouterModule,
    NgFor,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    CommonModule,

    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
