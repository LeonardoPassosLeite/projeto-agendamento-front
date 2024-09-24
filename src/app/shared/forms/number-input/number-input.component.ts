import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: []
})
export class NumberInputComponent extends BaseInputComponent<number> {
  override handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value ? parseFloat(target.value) : null;
    this.onChange(this.value);
  }
}