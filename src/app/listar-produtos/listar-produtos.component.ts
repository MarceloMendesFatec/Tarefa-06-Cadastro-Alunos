import { Component, OnInit } from '@angular/core';
import { Products } from 'src/interface-product';
import { ProdutoService  } from '../ProdutoService';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  constructor(private ProdutoService : ProdutoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  products: Products[] = [];

  getProducts(): void {
    this.ProdutoService.getProducts()
      .subscribe(products => this.products = products);

  }
}
