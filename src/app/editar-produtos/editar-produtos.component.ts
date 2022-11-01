import { Component, OnInit,Input } from '@angular/core';
import { Products } from 'src/interface-product';


@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product?: Products | any;
}
