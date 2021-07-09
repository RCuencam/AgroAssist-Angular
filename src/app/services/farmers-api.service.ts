import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable,throwError  } from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import { Farmer } from '../models/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmersApiService {
  private url: string = "http://localhost:3000/farmers"
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }


  constructor(private http: HttpClient) { }

  getAllFarmers(): Observable<Farmer>{
    return this.http.get<Farmer>(this.url)
    .pipe(retry(2),catchError(this.handleError));
  }

  addFarmer(item : Farmer) : Observable<Farmer>{

    
    return this.http.post<Farmer>(this.url,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2),catchError(this.handleError));
  }
}
