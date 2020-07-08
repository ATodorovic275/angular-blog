import { PostsService } from './../posts.service';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {

  // posts: Post[] = [
  //   {
  //     id: 1,
  //     category: "Gardening",
  //     title: "How to choose high quality soil for your gardens", date: "21 July, 2017", image: "garden_cat_01.jpg", author: "Amanda"
  //   },
  //   {
  //     id: 2,
  //     category: "Gardening",
  //     title: "How to choose high quality soil for your gardens", date: "21 July, 2017", image: "garden_cat_01.jpg", author: "Amanda"
  //   },
  //   {
  //     id: 3,
  //     category: "Gardening",
  //     title: "How to choose high quality soil for your gardens", date: "21 July, 2017", image: "garden_cat_01.jpg", author: "Amanda"
  //   }
  // ]


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

}
