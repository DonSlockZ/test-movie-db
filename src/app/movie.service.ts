import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = '';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url);
  }
}
