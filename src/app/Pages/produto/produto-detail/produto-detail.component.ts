import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shareds/Commons/MaterialModule';
import { InputComponent } from '../../../shared/forms/input/input.component';
import { NumberInputComponent } from '../../../shared/forms/number-input/number-input.component';
import { DatepickerComponent } from '../../../shared/forms/datepicker/datepicker.component';
import { DropdownComponent } from '../../../shared/forms/dropdown/dropdown.component';
import { Produto } from '../../../shared/interfaces/produto.interface';
import { ClienteModalComponent } from '../../../shared/modals/cliente-modal/cliente-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    InputComponent,
    NumberInputComponent,
    DatepickerComponent,
    DropdownComponent
  ],
  templateUrl: './produto-detail.component.html',
  styleUrl: './produto-detail.component.scss'
})
export class ProdutoDetailComponent {

  @Input() product!: Produto;
  isEditing = false;

  constructor(public dialog: MatDialog) { }

  markOptions = [
    { label: 'marca 1', value: 'marca 1' },
    { label: 'marca 2', value: 'marca 2' },
    { label: 'marca 3', value: 'marca 3' },
  ]

  locationOptions = [
    { label: 'Sapucaia do Sul', value: 'Sapucaia do Sul' },
    { label: 'Canoas', value: 'Canoas' },
    { label: 'Porto Porto', value: 'Porto Porto' },
  ]

  notFoundOption = { label: 'Marca não encontrada', value: 'not_found' };

  ngOnInit() {
    if (this.product.disponibilidade && !this.product.nome)
      this.isEditing = true;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  edit() {
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
    this.toggleEdit();
  }
}