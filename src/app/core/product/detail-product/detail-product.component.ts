import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product !: Product; 

  constructor(private service : ProjectService , private ac : ActivatedRoute){}
  ngOnInit(): void {
    this.getProductBYId();
  }


  getProductBYId(){
    this.service.getProductById(this.ac.snapshot.params['id']).subscribe((data)=>{
      this.product = data ; 
    })
  }
}