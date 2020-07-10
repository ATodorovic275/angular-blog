import { Post } from './../post';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private postService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params['id']);
      const id = params['id'];
      this.postService.getOnePost(id)
        .subscribe((data: Post) => this.post = data);

    })
  }

}
