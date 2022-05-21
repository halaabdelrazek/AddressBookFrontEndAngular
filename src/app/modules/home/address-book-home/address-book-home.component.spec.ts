import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookHomeComponent } from './address-book-home.component';

describe('AddressBookHomeComponent', () => {
  let component: AddressBookHomeComponent;
  let fixture: ComponentFixture<AddressBookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
