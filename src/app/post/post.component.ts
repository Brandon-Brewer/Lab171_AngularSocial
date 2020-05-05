import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  
  @Input() post:Post; 
  @Output() deleted = new EventEmitter<Post>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  deletePost = function() {
    this.deleted.emit(this.post);    
  }

}
