import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }

  title = 'ControlValueAccessor';
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  })

  submitData() {
    if (this.myForm.invalid) {
      return this.myForm.markAllAsTouched();
    }

    console.table(this.myForm.value);
  }

  disableForm() {
    if (this.myForm.disabled) {
      this.myForm.enable();
    } else {
      this.myForm.disable();
    }
  }

}
