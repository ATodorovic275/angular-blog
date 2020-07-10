import { PostComponent } from './../post/post.component';
import { PostCategoryComponent } from './../post-category/post-category.component';
import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post-category/:id', component: PostCategoryComponent },
  { path: 'post/:id', component: PostComponent },


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
