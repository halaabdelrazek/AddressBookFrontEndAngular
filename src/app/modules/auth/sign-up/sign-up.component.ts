import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/)]),
    dateOfBirth: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])

  });
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }



  register() {
    this.authService.Register(this.registerForm.value).subscribe({
      next: (response) => {

        this.route.navigate(['/auth/login'])

      },
      error: (err) => {
        console.log(err.error)

        for (let i = 0; i < err.error.length; i++) {
          alert(err.error[i].description);
        }

        console.log(err);
      },
    });





  }
}
