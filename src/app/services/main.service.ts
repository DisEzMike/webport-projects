import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

// const API = 'http://localhost:8080/api/project/';
const API = 'https://api.mikenatchapon.me/api/project/';

//httpOptions
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}
}
