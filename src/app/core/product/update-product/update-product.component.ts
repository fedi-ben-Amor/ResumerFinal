import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../service/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  ProductForm!: FormGroup;
  product!: Product;
  constructor(private fb: FormBuilder,
    private service: ProjectService,
    private router: Router,
    private actR: ActivatedRoute) { }
  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qte: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      category: ['', Validators.required],
    }),
      this.id = this.actR.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe((d) => {
      this.product = d;
      this.ProductForm.patchValue(this.product);
      console.log(d);
    });
  }
  id: any;
  UpdateProduct() {
    this.service.updateProduct(this.ProductForm.value, this.id).subscribe(() => {
      this.router.navigate(['product']);
      console.log('product updated');
    });
  }

}