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
import { RouterModule, } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { NgFor } from '@angular/common';


  

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    HttpClientModule
    
   

        
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
