import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
  annonces !:Annonce[];
    constructor(private service:AnnoncesService,
                private router:Router){}
  
    ngOnInit(): void {
      this.getListeAnnonce();
    }
    getListeAnnonce(){
      this.service.getAllAnnonce().subscribe(
        (d)=>{
          this.annonces=d;
          console.log(d);
          
        }
      )
    }
}
