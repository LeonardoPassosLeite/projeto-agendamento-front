import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteModalComponent } from '../../modals/cliente-modal/cliente-modal.component';
import { MaterialModule } from '../../../../../shareds/Commons/MaterialModule';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  product = {
    name: 'Produto Exemplo',
    model: 'Modelo Exemplo',
    price: 299.99,
    stock: 15,
    imageUrl: 'https://via.placeholder.com/300'
  };

  constructor(public dialog: MatDialog) {

  }

  addToCustomer(product: any) {
    const dialogRef = this.dialog.open(ClienteModalComponent,
      {
        width: '400px',
        data: { product }
      }
    );
    console.log(`Produto adicionado: ${product.name}`);
  }
}