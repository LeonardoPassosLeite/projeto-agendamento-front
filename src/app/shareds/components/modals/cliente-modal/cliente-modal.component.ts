import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../shareds/Commons/MaterialModule';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cliente-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './cliente-modal.component.html',
  styleUrl: './cliente-modal.component.scss'
})
export class ClienteModalComponent {

  clients = [
    { id: 1, name: 'Cliente 1', photoUrl: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Cliente 2', photoUrl: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Cliente 3', photoUrl: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Cliente 4', photoUrl: 'https://via.placeholder.com/40' },
  ];

  selectedClients: Set<number> = new Set<number>();
  searchTerm: string = '';

  constructor(
    public dialogRef: MatDialogRef<ClienteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCheckboxChange(id: number, event: any) {
    if (event.checked) {
      this.selectedClients.add(id);
    } else {
      this.selectedClients.delete(id);
    }
  }

  filteredClients() {
    if (!this.searchTerm) {
      return this.clients;
    }
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    return this.clients.filter(client =>
      client.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  onAddClient(): void {
    console.log('Adicionar Cliente');
  }

  onSave(): void {
    this.dialogRef.close(Array.from(this.selectedClients));
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}