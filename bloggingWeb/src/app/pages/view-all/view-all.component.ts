import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all',
  imports: [
    
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule, 

  ],
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  allPosts: any;

  constructor(
    private postService: PostService,
    private snackbar: MatSnackBar
  ) {
    console.log('ViewAllComponent initialized');
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (res) => {
        console.log(res);
        this.allPosts = res;
      },
      (error) => {
        this.snackbar.open("Something Went Wrong!!!", "ok");
      }
    );
  }
}