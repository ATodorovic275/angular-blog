import { Post } from './../../post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
