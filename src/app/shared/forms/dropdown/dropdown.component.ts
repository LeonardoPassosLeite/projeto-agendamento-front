import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { BaseInputComponent } from '../base-input.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})

export class DropdownComponent extends BaseInputComponent<string> {
  @Input() selectId: string = '';
  @Input() options: { label: string, value: string }[] = [];

  override handleInput(event: Event): void { }
}