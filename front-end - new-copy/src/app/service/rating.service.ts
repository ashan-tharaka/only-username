import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating.model';

const baseUrl = 'http://localhost:8090/api/v1/reviews';

@Injectable({
    providedIn: 'root'
})
export class RatingService {
  
    constructor(private http: HttpClient) { }

    getAll(): Observable<Rating[]> {
        return this.http.get<Rating[]>(`${baseUrl}/getAll`);
    }

    create(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/add`, data);
    }
}