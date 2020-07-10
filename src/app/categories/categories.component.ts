import { CategoriesService } from './../categories.service';
import { Category } from './../category';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  @Output() categoryId = new EventEmitter();

  constructor(private categoryService: CategoriesService) {
    // categoryService.getCategories().subscribe(response => console.log(response));
    categoryService.getCategories().subscribe((response: Category[]) => this.categories = response);
  }

  ngOnInit(): void {

  }

  catchEvent(event) {
    console.log(event);
    this.categoryId.emit(event)
  }




}
