import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: InputControlComponent,
    //   multi: true
    // }
  ]
})
export class InputControlComponent implements ControlValueAccessor {

  @Input() placeholder = '';
  @Input() id = '';
  @Input() label = '';

  onChange: any = () => { }
  onTouch: any = () => { }
  disabled: boolean;
  val = ""
  value = '';
  hasError: boolean;

  /** Responsible for emiting value patched to formcontrol while fb is declared */
  writeValue(value: any) {
    this.value = value
  }

  /** Responsible for detecting change event.
  * Value in formcontrol changed after declaration is received in this method.
  * Working - Needs a function to be assigned to and hooked with onChange method.
  */
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  /** Validation */
  // validate(control: AbstractControl): ValidationErrors | null {
  //   if (control.invalid && control.touched) {
  //     this.hasError = true;
  //   } else {
  //     this.hasError = false;
  //   }
  //   return control.errors;
  // }
}
