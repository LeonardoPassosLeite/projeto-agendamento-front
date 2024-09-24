import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../../../shareds/Commons/MaterialModule";
import { InputComponent } from "../../forms/input/input.component";
import { NumberInputComponent } from "../../forms/number-input/number-input.component";
import { DropdownComponent } from "../../forms/dropdown/dropdown.component";
import { Produto } from "../../interfaces/produto.interface";
import { MatDialog } from "@angular/material/dialog";
import { ClienteModalComponent } from "../../modals/cliente-modal/cliente-modal.component";


@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    InputComponent,
    NumberInputComponent,
    DropdownComponent
  ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})

export class ProdutoCardComponent {
  @Input() product!: Produto;
  isEditing = false;

  constructor(public dialog: MatDialog) { }

  markOptions = [
    { label: 'marca 1', value: 'marca 1' },
    { label: 'marca 2', value: 'marca 2' },
    { label: 'marca 3', value: 'marca 3' },
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