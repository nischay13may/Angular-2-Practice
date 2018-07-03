import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Result } from './result-board/result';

@Injectable()
export class ResultService {
  constructor(private http: HttpClient) {    }

    public getResult(){
         return this.http.get("./data.json");

     }

}
