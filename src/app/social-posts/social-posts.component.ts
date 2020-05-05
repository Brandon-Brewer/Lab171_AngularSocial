import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})

export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts:Post[] = [
    {title: "Angular is Awesome: A Case Study in Sarcasm", thought: "see above" },
    {title: "Testing Title", thought: "Testing Thought"}
  ]

  onDelete = function (post:Post){
    let idx = this.posts.indexOf(post);
    this.posts.splice(idx, 1)
  }

  onSubmit = function (post:Post){
    console.log(post.title);
    this.posts.unshift(post);
  }
}
