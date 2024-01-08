import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { ListeCategoryComponent } from '../core/category/liste-category/liste-category.component';
import { AddCategoryComponent } from '../core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from '../core/category/update-category/update-category.component';
import { DetailCategoryComponent } from '../core/category/detail-category/detail-category.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListeCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
