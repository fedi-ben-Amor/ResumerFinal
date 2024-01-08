import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailProductComponent } from './core/product/detail-product/detail-product.component';
import { ListAnnoncesComponent } from './coreExamen/list-annonces/list-annonces.component';
import { AnnoncesComponent } from './coreExamen/annonces/annonces.component';
import { EstimationCoutComponent } from './coreExamen/estimation-cout/estimation-cout.component';
const routes: Routes = [
  {path:'product',
   children:[
   {path:'', component:ListeProductComponent},
   {path:'add', component:AddProductComponent},
   {path:'update/:id', component:UpdateProductComponent},
   {path:'detail/:id', component:DetailProductComponent}]},
   {path:'category',loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)}, 
   {path:'anonce', component:AnnoncesComponent},     
   {path:'anonce/ListAnnonces', component:ListAnnoncesComponent},
   {path:'estimation',component:EstimationCoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
