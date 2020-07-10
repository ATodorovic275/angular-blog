import { Category } from './../../category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})
export class OneCategoryComponent implements OnInit {

  @Input() category: Category;

  @Output() categoryIdEvent = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitCategoryId(id: Number) {
    this.categoryIdEvent.emit(id);
  }

  onEvent(event) {
    return false;
  }
}
