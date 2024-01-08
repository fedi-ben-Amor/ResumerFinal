import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailProductComponent } from './core/product/detail-product/detail-product.component';
import { ListeCategoryComponent } from './core/category/liste-category/liste-category.component';
import { AddCategoryComponent } from './core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './core/category/update-category/update-category.component';
import { DetailCategoryComponent } from './core/category/detail-category/detail-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnnoncesComponent } from './coreExamen/annonces/annonces.component';
import { EstimationCoutComponent } from './coreExamen/estimation-cout/estimation-cout.component';
import { PageComponent } from './coreExamen/page/page.component';
import { ListAnnoncesComponent } from './coreExamen/list-annonces/list-annonces.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DetailProductComponent,
    AnnoncesComponent,
    EstimationCoutComponent,
    PageComponent,
    ListAnnoncesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
