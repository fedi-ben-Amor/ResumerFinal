import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  url="http://localhost:3000/Annonce/";
  constructor(private http: HttpClient) { }
  getAllAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url);
  }
}
