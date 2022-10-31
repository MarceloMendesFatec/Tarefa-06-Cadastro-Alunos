import { Injectable } from '@angular/core';
import { Products } from 'src/interface-product';
import { mockList } from 'src/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }


  getProducts(): Observable<Products[]>{
    const products = of (mockList);
    return products;
  }


}
