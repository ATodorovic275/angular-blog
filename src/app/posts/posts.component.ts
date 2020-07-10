import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { slide } from '../animations';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [slide]
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


  onCategoryClick(event) {
    console.log("ID: " + event)
    this.postService.getPostsFromCategory(event)
      .subscribe((response: Post[]) => this.posts = response);
    console.log(this.posts);
  }

}
