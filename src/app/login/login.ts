import { Component,inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get username(): AbstractControl {
    return this.loginForm.get('username')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  private authService = inject(AuthService); 
  errorMessage: string = '';

  onSubmitForm() {
    console.log('Form submitted with values:', this.loginForm.value);
    // if (this.loginForm.valid) {
    //   const usernameValue = this.loginForm.value.username || '';
    //   const passwordValue = this.loginForm.value.password || '';

    //   this.authService.login(usernameValue, passwordValue, () => {
    //     this.errorMessage = 'שם המשתמש או הסיסמה אינם נכונים. נסה שוב.';
    //   });
    // }
  }
}

