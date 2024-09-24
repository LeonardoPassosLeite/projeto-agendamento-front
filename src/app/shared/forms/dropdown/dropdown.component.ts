import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseInputComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: []
})
export class DropdownComponent extends BaseInputComponent<string> {
  @Input() selectId: string = '';
  @Input() options: { label: string, value: string }[] = [];

  override handleInput(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }
}