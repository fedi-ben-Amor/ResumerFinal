import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url1='http://localhost:3000/product/';
  url2='http://localhost:3000/category/';
  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url1);
  }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url2);
  }
  addProduct(product: Product) {
    return this.http.post(this.url1, product);
  }
  addCategory(category: Category) {
    return this.http.post(this.url2, category);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url1 + id)
  }
  deleteCategory(id: number) {
    return this.http.delete(this.url2 + id)
  }
  updateProduct(product:Product,id:any){
    return this.http.put(this.url1+id,product);
  }
  updateCategory(category:Category,id:any){
    return this.http.put(this.url2+id,category);
  }
  getProductById(id: any) {
    return this.http.get<Product>(this.url1 + id);
  }
  getCategoryById(id: any) {
    return this.http.get<Category>(this.url2 + id);
  }
}
