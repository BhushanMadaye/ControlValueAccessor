import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

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
  @Input() parentForm: FormGroup;
	@Input() fieldName: string;

  onChange: any = () => { }
  onTouch: any = () => { }
  disabled: boolean;
  value = '';

  get formField (): FormControl {
		return this.parentForm?.get(this.fieldName) as FormControl;
	}

  /** Responsible for emiting value patched to formcontrol while fb is declared */
  writeValue(value: any) {
    this.value = value
  }

  public changed ( event: Event ): void {
		const value: string =
			( <HTMLInputElement>event.target ).value;

		this.onChange( value );
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

}
