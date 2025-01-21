import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'] 
})
export class ViewPostComponent {

  postId: number;
  postDta: any;

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
      this.postDta = res;
      console.log(res);
    }, error=>{this.matSnackBar.open("Something Went Wrong!!!","ok")

    })
  }
  
  

}
