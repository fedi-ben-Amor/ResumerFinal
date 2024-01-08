import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  @Input()nbArticles!:number;
  @Input() listeArticles: any[] = [];
  @Output()testoutput = new EventEmitter();
  test:any;
  klass='4twin6'
  showMsg(){
    alert("This is a message from child component");
  }
 ngOnInit(): void {
console.log("qsqsqss"+this.listeArticles);   
 }
 sendToParent(){
  this.testoutput.emit(this.test)
 }
 
}
