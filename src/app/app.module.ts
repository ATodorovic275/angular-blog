import { ShortStrPipe } from './short-str.pipe';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './top-posts/one-post/one-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { OneCategoryComponent } from './categories/one-category/one-category.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostComponent } from './post/post.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TopPostsComponent,
    OnePostComponent,
    CategoriesComponent,
    OneCategoryComponent,
    PostsComponent,
    SinglePostComponent,
    PostComponent,
    PostCategoryComponent,
    ShortStrPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
