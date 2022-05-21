import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AuthService } from '../../auth/auth.service';
import { ContactsService } from '../../core/ContactService/contacts.service';
import { DepartmentService } from '../../core/DepartmentService/department.service';
import { JobTitleService } from '../../core/JobTitleService/job-title.service';
import { Contact, CreateContactDTO, Department, UpdatedContactDTO } from '../Models/contact.model';
import { JobTitle } from '../Models/JobTitle.model';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-address-book-home',
  templateUrl: './address-book-home.component.html',
  styleUrls: ['./address-book-home.component.css']
})
export class AddressBookHomeComponent implements OnInit {

  contacts: Contact[] = [];
  Departments: Department[] = [];
  JobTitles: JobTitle[] = [];
  contactToEdit: Contact | null = null;

  selectedFile: any = null;

  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';

  AddOrEditForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/)]),
    dateOfBirth: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    Department: new FormControl('', Validators.required),
    JobTitle: new FormControl('', Validators.required),

  })

  constructor(private authService: AuthService, private contactService: ContactsService, private departmentService: DepartmentService, private jobTitleService: JobTitleService, private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });

    this.departmentService.getAllDepartments().subscribe({
      next: (departments) => {
        this.Departments = departments;
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });


    this.jobTitleService.getAllJobTitle().subscribe({
      next: (jobtitles) => {
        this.JobTitles = jobtitles;
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });
  }

  logout() {
    this.authService.logout();
  }


  openAddModal() {
    this.AddOrEditForm.reset();

    this.ngxSmartModalService.getModal('contactrModal').open();

  }

  closeModal() {
    this.AddOrEditForm.reset();
    this.ngxSmartModalService.getModal('contactrModal').close();

  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file.name);
      this.AddOrEditForm.patchValue({ 'image': file.name });
    }
  }

  exportexcel() {

    /* pass here the table id */
  

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  // onFileSelect(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  // }

  // onUpload() {
  //   const fileData = new FormData();
  //   fileData.append('image', this.selectedFile, this.selectedFile.name);
  //   this.contactService.UploadImage(fileData).subscribe(res=>{
  //     console.log(res);
  //   })
  // }

  addOrEditContact() {

    const { value, valid, dirty } = this.AddOrEditForm;

    if (!valid || !dirty) return;



    if (!this.contactToEdit) {


      let contactAdd: CreateContactDTO = {

        username: this.AddOrEditForm.value.username,
        email: this.AddOrEditForm.value.email,
        phone: this.AddOrEditForm.value.phone,
        dateOfBirth: this.AddOrEditForm.value.dateOfBirth,
        address: this.AddOrEditForm.value.address,
        image: this.AddOrEditForm.value.image,
        age: this.AddOrEditForm.value.age,
        DepartmentId: this.AddOrEditForm.value.Department,
        JobTitleId: this.AddOrEditForm.value.JobTitle
      }
      // this.onUpload();
      this.contactService
        .addContact(contactAdd)
        .subscribe({
          next: (conatct) => {
            this.contacts.push(conatct);
            this.AddOrEditForm.reset();
            this.ngxSmartModalService.getModal('contactrModal').close();
          },
          error: (err) => {
            alert(err.error);
            console.log(err);
          },
        });

    } else {


      let contactUpdate: UpdatedContactDTO = {
        contactId: this.contactToEdit.contactId,
        username: this.AddOrEditForm.value.username,
        email: this.AddOrEditForm.value.email,
        phone: this.AddOrEditForm.value.phone,
        dateOfBirth: this.AddOrEditForm.value.dateOfBirth,
        address: this.AddOrEditForm.value.address,
        image: this.AddOrEditForm.value.image,
        age: this.AddOrEditForm.value.age,
        DepartmentId: this.AddOrEditForm.value.Department,
        JobTitleId: this.AddOrEditForm.value.JobTitle
      }
      debugger;
      this.contactService
        .editContact(this.contactToEdit.contactId, contactUpdate)
        .subscribe({
          next: (response) => {

            const indexToEdit = this.contacts.findIndex((c) => c.contactId === response.contactId);
            this.contacts.splice(indexToEdit, 1, response);

            this.contactToEdit = null;
            this.AddOrEditForm.reset();
            this.ngxSmartModalService.getModal('contactrModal').close();
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }



  openEditModal(event: any, contact: Contact) {
    event.stopPropagation();
    this.contactToEdit = contact;
    this.AddOrEditForm.patchValue({ username: contact.username, email: contact.email, phone: contact.phone, address: contact.address, dateOfBirth: contact.dateOfBirth, age: contact.age, Department: contact.department.departmentName, jobTitle: contact.jobTitle.jobTitleName });

    this.ngxSmartModalService.getModal('contactrModal').open();
  }

  deleteContact(event: any, id: any) {
    event.stopPropagation();

    if (confirm('Are you sure you want to delete this contact?!')) {
      this.contactService.deleteContactById(id).subscribe({
        next: () => {
          this.contacts = this.contacts.filter((c) => c.contactId !== id);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

}
