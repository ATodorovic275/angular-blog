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
    // postService.getRandomPosts().subscribe((data: p[]) => {
    //   console.log(data);
    //   // this.categories = data;
    // }

    // )

    this.postService.getRandomPosts().subscribe((data: Post[]) => this.posts = data);
    console.log(this.posts)
  }

  ngOnInit(): void {
  }

  getPosts() {
    console.log(this.posts)
  }
} 
