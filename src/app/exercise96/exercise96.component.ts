import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise96',
  templateUrl: './exercise96.component.html',
  styleUrls: ['./exercise96.component.css'],
})
export class Exercise96Component {
  public loginForm: FormGroup;
  public isSubmitting: boolean = false;

  constructor(private loginFormBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.loginFormBuilder.group({
      email: this.loginFormBuilder.control('', [Validators.required, Validators.email, Validators.minLength(5)]),
      password: this.loginFormBuilder.control('', [Validators.required, Validators.minLength(8)]),
      rememberMe: this.loginFormBuilder.control(true),
    });
  }

  public onSubmit(): void {
    this.isSubmitting = true;
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;
    const rememberMe: boolean = this.loginForm.get('rememberMe')?.value;
    if (email === 'test123@gmail.com' && password === 'test1234') {
      this.router.navigate([''])
    }
    if (rememberMe) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  }
}
