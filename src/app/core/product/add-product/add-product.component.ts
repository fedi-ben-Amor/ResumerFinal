import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ProductForm!: FormGroup;
  constructor(private fb:FormBuilder,
              private service:ProjectService,
              private router:Router){}
  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      description:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      price:['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      qte:['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      category:['',Validators.required],
    })
  }

  addProduct(){
  
          this.ProductForm.value;
          this.service.addProduct(this.ProductForm.value).subscribe(
            () => {
              this.router.navigate(['/product']);
              console.log("product added");
            }
          )
        }

}
