import { Component } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent {
  cout : number = 0;
  EstimationForm !: FormGroup;
  show:boolean=false;
  constructor(private fb: FormBuilder, private service: AnnoncesService,
    private router: Router) { }


  ngOnInit(): void {
    this.EstimationForm = this.fb.group({
      position: ['', Validators.required],
      nombreC: ['', [Validators.required,Validators.max(60)]],
    })
  }

  Calcul() {
    console.log(this.EstimationForm.value.position);
    console.log(this.EstimationForm.value.nombreC)
    this.show=true;
    if (this.EstimationForm.value.position == 'haut') {
      if (this.EstimationForm.value.nombreC <= 30) {
        this.cout = 10
      } else {
        this.cout = 20
      }
    } else if (this.EstimationForm.value.position == "bas") {
      if (this.EstimationForm.value.nombreC <= 30) {
        this.cout = 5
      } else {
        this.cout = 15
      }
    }
  }
}
