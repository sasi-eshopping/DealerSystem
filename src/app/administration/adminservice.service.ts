import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  getAPI(url: string, params?: HttpParams): Observable<any> {
  var httpHeaders = new HttpHeaders({
      
    });
      return this.http.get('assets/data.json', { headers: httpHeaders, params: params, observe: 'response' })
        .pipe(map((response: any) => response),
          // retry(1),
          catchError((err) => this.handleError(err)));
    }
  

  private handleError(error: Response) {
    // console.log('ERROR::STATUS:::::' + error.status);
    // console.log('ERROR::STATUS TEXT:::::' + error.statusText);
    return of('');
  }
}
