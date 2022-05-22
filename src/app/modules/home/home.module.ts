import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home-routing';
import { AddressBookHomeComponent } from './address-book-home/address-book-home.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDateRangePickerModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AddressBookHomeComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    HomeRouting,
    NgxSmartModalModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    IgxDateRangePickerModule,
    IgxInputGroupModule,
    IgxIconModule,
    MatSelectModule
    

  ]
})
export class HomeModule { }
