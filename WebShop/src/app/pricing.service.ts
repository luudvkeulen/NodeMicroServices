import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private http: HttpClient) { }

  getPrices(): Promise<any> {
    return this.http.get('http://localhost:8181/prices').toPromise();
  }

  addPrice(price: Object): Promise<any> {
    return this.http.post('http://localhost:8181/prices', price).toPromise();
  }
}
