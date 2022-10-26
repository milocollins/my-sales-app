import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.api + 'categories');
  }

  public save(category: Category): Observable<Category> {
    if(category.id) return this.http.put<Category>(
      environment.api + 'categories/' + category.id,
      category
    );
    return this.http.post<Category>(
      environment.api + 'categories',
      category
      );
  }

}

