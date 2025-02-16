import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'
import { CommonModule, NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-view-post', 
  imports: [
    
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule, 
    MatChipsModule,
    MatInputModule,
    NgFor, 
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'] 
})
export class ViewPostComponent {

  postId: number;
  postData: any;

  commentForm!: FormGroup;
  comments:any;

  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService
  ){
   
    this.postId = this.activateRoute.snapshot.params['id'];
  } 



  ngOnInit() {
    this.getPostById();

    this.commentForm = this.fb.group({
      postedBy:[null, Validators.required],
      content:[null, Validators.required],
    })
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.postId, postedBy, content).subscribe(res=>{
      this.matSnackBar.open("Comment Added Successfully","ok")
    }, error=>{
      this.matSnackBar.open("Something Went Work!!!","ok")
    })
  }

  
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData = res;
      this.getAllCommentsByPost();
      console.log(res);
    }, error=>{
      this.matSnackBar.open("Something Went Wrong!!!","ok")

    })
  }
  
  getAllCommentsByPost(){
    this.commentService.getAllCommentsByPost(this.postId).subscribe(res=>{
      this.comments = res;
    },error=>{
     this.matSnackBar.open("Something Went Wrong!!!","ok")
    
    })
  }

  likePost(){
    this.postService.likePost(this.postId).subscribe(res=>{
       this.matSnackBar.open("Post Liked Successfully","ok")
       this. getPostById();
    },error=>{
     this.matSnackBar.open("Something Went Wrong!!!","ok")
   })
  }

}
