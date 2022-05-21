import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthRouting } from './auth-routing';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent,AuthComponent,SignUpComponent],
  imports: [AuthRouting,CommonModule,ReactiveFormsModule,HttpClientModule]
})


export class AuthModule {}
