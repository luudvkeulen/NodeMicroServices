import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Promise<any> {
    return this.http.get('http://localhost:8080/products').toPromise();
  }

  getProductById(id: String): Promise<any> {
    return this.http.get(`http://localhost:8080/products/${id}`).toPromise();
  }

  addProduct(product: Object): Promise<any> {
    return this.http.post('http://localhost:8080/products', product).toPromise();
  }
}
