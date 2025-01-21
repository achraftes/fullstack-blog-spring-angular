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
    NgFor,

  ],
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'] 
})
export class ViewPostComponent {

  postId: number;
  postData: any;

  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
  ){
   
    this.postId = this.activateRoute.snapshot.params['id'];
  } 



  ngOnInit() {
    this.getPostById();
  }

  
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData = res;
      console.log(res);
    }, error=>{this.matSnackBar.open("Something Went Wrong!!!","ok")

    })
  }
  
  

}
