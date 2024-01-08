import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../model/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  //category=new Category();
  id: any;
  @Input()category =new Category();
  @Output()notif=new EventEmitter();
  @Output()updateCategory=new EventEmitter()
  constructor(
    private service: ProjectService,
    private router: Router,
    private actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategoryById();
  }
  getCategoryById(){
  //  this.id = this.actR.snapshot.params['id'];
  //  this.service.getCategoryById(this.id).subscribe((d) => {
  //    this.category = d;
   //   console.log(d);
   // });
  }
  UpdateCategory(updatedCategory: Category) {
    this.service.updateCategory(updatedCategory, this.category.id).subscribe(() => {
      this.router.navigate(['category']);
      console.log('Category updated');
      window.location.reload();
    });
  }
}
