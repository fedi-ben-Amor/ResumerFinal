import { ProjectService } from './../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
products !:Product[];
  constructor(private service:ProjectService,
              private router:Router){}

  ngOnInit(): void {
    this.getListeProduct();
  }
  getListeProduct(){
    this.service.getAllProduct().subscribe(
      (d)=>{
        this.products=d;
        console.log(d);
        
      }
    )
  }
  goToAddProduct(){
    this.router.navigate(['/product/add']);
  }
  deleteProduct(id:number){
    this.service.deleteProduct(id).subscribe({
      next:() =>this.products=this.products.filter((a)=>a.id!=id)
      })
  }
  goToUpdateProduct(id:number){
    this.router.navigate(['/product/update/'+id]);
  }
  goToDetailsProduct(id:number){
    this.router.navigate(['/product/detail/'+id]);
  }
}
