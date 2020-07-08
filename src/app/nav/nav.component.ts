import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: Category[];

  constructor(private service: CategoriesService) {
    // this.service.getCategories();
    this.service.getCategories().subscribe((data: Category[]) => this.categories = data);

  }

  ngOnInit(): void {

  }

}
