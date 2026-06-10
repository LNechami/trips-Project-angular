import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  passwordMatch(group: AbstractControl) {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p === c ? null : { mismatch: true };
  }

  regiserForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    credentials: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.passwordMatch }),
  });

  get username(): AbstractControl {
    return this.regiserForm.get('username')!;
  }

  get credentialsGroup() {
    return this.regiserForm.get('credentials') as FormGroup;
  }

  onSubmitForm() {
    console.log(this.regiserForm.value);

  }
}
