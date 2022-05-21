import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './modules/auth/auth.service';
import { Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { Interceptor } from './modules/core/interceptore/interceptors.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    CoreModule,
    BrowserAnimationsModule,
    HammerModule,

  ],


  providers: [AuthService, 
    {provide: APP_BASE_HREF, useValue: '/'},{provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
