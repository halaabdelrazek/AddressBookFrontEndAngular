import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home-routing';
import { AddressBookHomeComponent } from './address-book-home/address-book-home.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddressBookHomeComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    HomeRouting,
    NgxSmartModalModule.forChild(),
    ReactiveFormsModule

  ]
})
export class HomeModule { }
