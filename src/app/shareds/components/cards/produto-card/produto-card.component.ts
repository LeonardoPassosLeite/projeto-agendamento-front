import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteModalComponent } from '../../modals/cliente-modal/cliente-modal.component';
import { MaterialModule } from '../../../../../shareds/Commons/MaterialModule';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../interfaces/produto.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})

export class ProdutoCardComponent {
  @Input() product!: Produto;
  isEditing = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (this.product.stock === 1)
      this.isEditing = true;
  }

  teste(){
    this.isEditing = true;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addToCustomer(product: Produto) {
    const dialogRef = this.dialog.open(ClienteModalComponent,
      {
        width: '400px',
        data: { product }
      }
    );
  }

  saveProduct() {
    this.isEditing = false;
  }
}
