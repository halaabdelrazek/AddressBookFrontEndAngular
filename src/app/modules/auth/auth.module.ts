import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent,AuthComponent],
  imports: [AuthRoutingModule,CommonModule,ReactiveFormsModule,HttpClientModule]
})


export class AuthModule {}
