import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  imports: [],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {

  allPosts:any;

  constructor(private postService:PostService,
    private snackbar:MatSnackBar
  ){}

  ngOInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(res=>{
       console.log(res);
       this.allPosts=res;
    },error=>{
      this.snackbar.open("Something Went Wrong!!!","ok");
    })
  }

}
