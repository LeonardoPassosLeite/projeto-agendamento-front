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
      marca: 'JOHN DEERE',
      localidade: 'Sapucaia do sul',
      ano: 1994,
      price: 199.99,
      quilometragem: 0,
      disponibilidade: true,
      imageUrl: ''
    },
    {
      id: 2,
      name: 'Produto 1',
      marca: 'Fiat',
      localidade: 'Sapucaia do sul',
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
      name: '',
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
