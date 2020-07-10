import { CategoriesService } from './../categories.service';
import { Category } from './../category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoriesService) {
    // categoryService.getCategories().subscribe(response => console.log(response));
    categoryService.getCategories().subscribe((response: Category[]) => this.categories = response);
  }

  ngOnInit(): void {

  }

}
