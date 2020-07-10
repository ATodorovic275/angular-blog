import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService) {
    // postService.getPosts().subscribe((response) => console.log(response["data"]));
    postService.getPosts().subscribe((response) => this.posts = response["data"]);
    // postService.getPosts();
  }

  ngOnInit(): void {
  }

}
