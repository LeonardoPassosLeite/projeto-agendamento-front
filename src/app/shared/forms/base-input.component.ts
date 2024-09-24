import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputComponent),
      multi: true
    }
  ]
})
export class BaseInputComponent<T> implements ControlValueAccessor {
  @Input() labelText: string = 'Label';
  @Input() inputId: string = '';
  @Input() name: string = '';

  value: T | null = null;

  onChange = (value: T | null) => {};
  onTouched = () => {};

  writeValue(value: T | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    this.value = target.value as unknown as T;
    this.onChange(this.value);
  }
}