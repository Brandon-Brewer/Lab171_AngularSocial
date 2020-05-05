import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  post:Post = {title: '', thought: ''};
  hideForm:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  submitPost = function() {
    let newPost:Post = {
      title: this.post.title, 
      thought: this.post.thought
    }
    
    this.submitted.emit(newPost);
    
    this.post.title = '';
    this.post.thought = '';
    this.hideForm = true;
  }

  newThought = function() {
    this.hideForm = false
  }
}
