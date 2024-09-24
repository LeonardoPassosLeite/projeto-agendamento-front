import { Component } from '@angular/core';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: []
})
export class InputComponent extends BaseInputComponent<string> {
  override handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }
}