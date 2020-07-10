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
    // this.http.get(this.baseUrl).subscribe(response => console.log(response));

    return this.http.get(this.baseUrl);
  }


  getPosts() {
    // this.http.get("http://127.0.0.1:8000/api/post").subscribe(response => console.log(response));
    return this.http.get("http://127.0.0.1:8000/api/post");


  }


  getPostsFromCategory(id: number) {
    // this.http.get("http://127.0.0.1:8000/api/category-post/" + id).subscribe(data => console.log(data));
    return this.http.get("http://127.0.0.1:8000/api/category-post/" + id);
  }


  getOnePost(id: Number) {
    return this.http.get("http://127.0.0.1:8000/api/post/" + id);
  }

}
