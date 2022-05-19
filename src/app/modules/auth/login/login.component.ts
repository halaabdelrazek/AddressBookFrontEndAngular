import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  isChecked = true;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    if (!this.loginForm.valid) {
      return;
    } else if (
      this.loginForm.value.email !== localStorage.getItem('email') ||
      this.loginForm.value.password !== localStorage.getItem('password')
    ) {
      this.isChecked = false;
    } else {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('user',JSON.stringify((response as any).data.user)
          );
          localStorage.setItem('token', (response as any).data.token);
          this.route.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
