import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pandemy } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  getGlobal() {
    return this.http.get<Pandemy>('https://api.covid19api.com/summary');
  }
}
