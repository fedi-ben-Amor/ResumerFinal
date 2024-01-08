import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCategoryComponent } from '../core/category/liste-category/liste-category.component';
import { AddCategoryComponent } from '../core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from '../core/category/update-category/update-category.component';
import { DetailCategoryComponent } from '../core/category/detail-category/detail-category.component';

const routes: Routes = [
  {path:'', component:ListeCategoryComponent},
  {path:'add', component:AddCategoryComponent},
  {path:'update/:id', component:UpdateCategoryComponent},
  {path:'detail/:id', component:DetailCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
