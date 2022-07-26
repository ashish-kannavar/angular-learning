import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonutDetails, DonutResults } from '../interfaces/donut-api-model';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  constructor(private http: HttpClient) { }

  fetchAllDonut():Observable<DonutResults>{
    return this.http.get<DonutResults>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  fetchDonutById(id: number): Observable<DonutDetails> {
    const url = `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`;
    return this.http.get<DonutDetails>(url);
  }
}
