import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  allPosts: any;

  constructor(
    private postService: PostService,
    private snackbar: MatSnackBar
  ) {}

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