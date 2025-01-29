import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

// Mat Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

// Angular Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-by-name',
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule,
    NgFor
  ],
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent {
  allPosts: any;
  name: any = "";

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  searchByName() {
    this.postService.searchByName(this.name).subscribe(res => {
      this.allPosts = res;
    }, error => {
      this.snackBar.open("Something went wrong!", "OK");
    });
  }
}
