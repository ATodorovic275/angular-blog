import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url: string = "http://127.0.0.1:8000/api/category";

  constructor(private http: HttpClient) { }


  getCategories() {
    // this.http.get(this.url).subscribe(response => console.log(response));

    return this.http.get(this.url);
  }
}
