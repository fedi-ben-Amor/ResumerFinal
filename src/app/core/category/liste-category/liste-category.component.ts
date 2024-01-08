import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { Router } from '@angular/router';
import { Category } from '../../model/category';

@Component({
  selector: 'app-liste-category',
  templateUrl: './liste-category.component.html',
  styleUrls: ['./liste-category.component.css']
})
export class ListeCategoryComponent implements OnInit {
  categorys !:Category[];
  categorytoSelected!:Category;
  showAddCategory:Boolean=false;
  showUpdateCategory:Boolean=false;
    constructor(private service:ProjectService,
                private router:Router){}
  
    ngOnInit(): void {
      this.getListeCategory();
    }
    traitemenet(t:any){
      this.showUpdateCategory=!this.showUpdateCategory
    }
    changeTab(e:any){
      this.showUpdateCategory=false;
      for(let i=0;i<this.categorys.length;i++){
        if(this.categorys[i].id==e.id){
          this.categorys[i]=e;
        }
      }
    }
    goToUpdateCategory(cat:Category){
      this.showUpdateCategory=true;
    this.categorytoSelected=cat
    }
    onCategoryAdded(newCategory: Category) {
      this.categorys.push(newCategory); 
       this.showAddCategory=false;
     }
    
     GoToAddCategory(){
      this.showAddCategory=true;    
      //this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/foyer/addFoyer'])
    }
    getListeCategory(){
      this.service.getAllCategory().subscribe(
        (d)=>{
          this.categorys=d;
          console.log(d);
          
        }
      )
    }
    //goToAddCategory(){
     // this.router.navigate(['/category/add']);
    //}
    deleteCategory(id:number){
      this.service.deleteCategory(id).subscribe({
        next:() =>this.categorys=this.categorys.filter((a)=>a.id!=id)
        })
    }
   // goToUpdateCategory(id:number){
    //  this.router.navigate(['/category/update/'+id]);
   // }
    goToDetailsCategory(id:number){
      this.router.navigate(['/category/detail/'+id]);
    }
  }
  
