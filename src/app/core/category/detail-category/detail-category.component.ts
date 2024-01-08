import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';

import { ActivatedRoute } from '@angular/router';
import { Category } from '../../model/category';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  category !: Category; 

  constructor(private service : ProjectService , private ac : ActivatedRoute){}
  ngOnInit(): void {
    this.getCategoryBYId();
  }


  getCategoryBYId(){
    this.service.getCategoryById(this.ac.snapshot.params['id']).subscribe((data)=>{
      this.category = data ; 
    })
  }
}
