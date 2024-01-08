import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../service/project.service';
import { Router } from '@angular/router';
import { Category } from '../../model/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent   {
  @Output()addCategory=new EventEmitter<Category>

  constructor(private service:ProjectService,private router:Router){

  }
category=new Category()
  showForm(f:any){
  console.log(f)
}
saveProduct(c:Category){

this.service.addCategory(c).subscribe(
  ()=>{
    this.router.navigate(['/category'])
    window.location.reload();
  }
);
}
}