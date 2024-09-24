import { Component } from '@angular/core';
import { Produto } from '../../shared/interfaces/produto.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shareds/Commons/MaterialModule';
import { ProdutoCardComponent } from '../../shared/cards/produto-card/produto-card.component';

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
      nome: 'Produto 1',
      marca: 'marca 1',
      localidade: 'Sapucaia do Sul',
      ano: 1994,
      price: 199.99,
      quilometragem: 0,
      disponibilidade: true,
      imageUrl: ''
    },
    {
      id: 2,
      nome: 'Produto 1',
      marca: 'Fiat',
      localidade: 'Sapucaia do Sul',
      ano: 1994,
      price: 199.99,
      quilometragem: 0,
      disponibilidade: false,
      imageUrl: ''
    },
  ];

  addNewProduct() {
    const newProduct: Produto = {
      id: this.products.length + 1,
      nome: '',
      marca: '',
      localidade: '',
      ano: 0,
      price: 0,
      quilometragem: 0,
      disponibilidade: true,
      imageUrl: ''
    };

    this.products.push(newProduct);
  }
}
