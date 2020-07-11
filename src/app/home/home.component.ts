import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService) {
    this.postService.getRandomPosts().subscribe((data: Post[]) => this.posts = data);
  }

  ngOnInit(): void {
  }


} 
