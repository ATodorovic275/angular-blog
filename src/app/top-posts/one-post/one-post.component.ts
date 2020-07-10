import { PostsService } from './../../posts.service';
import { Post } from './../../post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  @Input() post: Post;

  constructor() {

  }

  ngOnInit(): void {
  }

}
