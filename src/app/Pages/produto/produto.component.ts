import { Component } from '@angular/core';
import { ProdutoCardComponent } from "../../shareds/components/cards/produto-card/produto-card.component";
import { Produto } from '../../shareds/interfaces/produto.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shareds/Commons/MaterialModule';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    CommonModule,
    ProdutoCardComponent,
    MaterialModule
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  products: Produto[] = [
    {
      id: 1,
      name: 'Produto 1',
      modelo: 'Modelo do produto 1',
      ano: 1994,
      price: 199.99,
      stock: 10,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Produto 2',
      modelo: 'Modelo do produto 1',
      ano: 1997,
      price: 399.99,
      stock: 0,
      imageUrl: 'https://via.placeholder.com/300'
    },
  ];

  addNewProduct() {
    const newProduct: Produto = {
      id: this.products.length + 1,
      name: '',
      modelo: '',
      ano: 0,
      price: 0,
      stock: 1,
      imageUrl: ''
    };

    this.products.push(newProduct);
  }
}
