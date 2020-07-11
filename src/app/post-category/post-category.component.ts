import { PostsService } from './../posts.service';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {

  private id: number;
  postsFromCategory: Post[];

  constructor(private route: ActivatedRoute, private postService: PostsService) {
    this.postService.getPostsFromCategory(this.id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.postService.getPostsFromCategory(this.id)
        .subscribe((data: Post[]) => this.postsFromCategory = data);
    })
  }




}
