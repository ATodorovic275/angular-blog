import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [];
  baseUrl: string = "http://127.0.0.1:8000/api/random-post"

  constructor(private http: HttpClient) {

  }

  getRandomPosts() {

    // console.log("Test") 
    this.http.get(this.baseUrl).subscribe(response => console.log(response));

    return this.http.get(this.baseUrl);


    // map((data: any[]) => data.map((item: any) => {
    //   // console.log("Item");
    //   const array: Post[] = [];
    //   array.push({
    //     id: item.id,
    //     title: item.title,
    //     date: item.date,
    //     description: item.description,
    //     author: { id: item.author.id, first_name: item.author.first_name, last_name: item.author.last_name },
    //     category: { id: item.category.id, name: item.category.name }
    //   })
    //   // return array;
    //   // this.posts = array;
    // }))


    // return this.posts;
    // console.log(this.posts)


  }
}
