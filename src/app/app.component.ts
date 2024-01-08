import { Component, ViewChild } from '@angular/core';
import { PageComponent } from './coreExamen/page/page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PageComponent)private ch!:PageComponent;

mymsg(){ 
  console.log(this.ch.showMsg());
  console.log(this.ch.klass);
}
  title = 'revisionFinal';
  search!:any;
  

 // articlesToShow: any[] = [];
  articles=[
    {titre:'Le championnat du monde',contenu:'Le champion du monde decette année est ....',auteur:'Med Taher',date:'12/12/2005'},
    {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucherun emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
   ]
   showtest(test:any){
    console.log('test from child : ', test);
   }
   /*onArticlesNumberChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.nbArticles = +inputValue; // Convert input value to number and assign to 'nombreSaisi'
    if (!this.nbArticles || this.nbArticles > this.articles.length) {
      this.articlesToShow = this.articles; // Si aucun nombre saisi ou dépasse le nombre total, afficher tous les articles
    } else {
      this.articlesToShow = this.articles.slice(0, this.nbArticles); // Sinon, afficher le nombre d'articles saisi
    }
    }*/
  
}
