import { PostsService } from './../posts.service';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, query, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-100%)' })),
        query('img',
          stagger('300ms', [
            animate('800ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])
  ]
})
export class TopPostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) {
    this.postService.getRandomPosts().subscribe((data: Post[]) => this.posts = data);
  }


  ngOnInit(): void {
  }

}
