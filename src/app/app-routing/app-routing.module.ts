import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

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
