import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  standalone: true, 
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  
  postForm!: FormGroup;
  tags:string[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,){}

    ngOnInit(){
      this.postForm = this.fb.group({
        name:[null, Validators.required],
        content:[null,[ Validators.required, Validators.minLength(5000)]],
        img:[null, Validators.required],
        postedBy:[null, Validators.required]

      })
    }

    add(event:any){
      const value =(event.value ||'').trim();
      if(value){
        this.tags.push(value);
      }

      event.chipInput!.clear()
    }

    remove(tag:any){
      const index =this.tags.indexOf(tag);

      if(index>=0){
        this.tags.splice(index,1);
      }
    }
}