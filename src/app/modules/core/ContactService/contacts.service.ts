import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, CreateContactDTO, SearchObject, UpdatedContactDTO } from '../../home/Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseURL: string = 'http://halaabdelrazek-001-site1.gtempurl.com/api/Contact';

  constructor(private httpClient: HttpClient) { }

  getAllContacts(){
    return this.httpClient.get<Contact[]>(this.baseURL)}

    getcontactById(id: string){
      return this.httpClient.get<Contact>(this.baseURL + id);
    }
  
    addContact(newContact: Omit<CreateContactDTO, 'contactId'>){
      return this.httpClient.post<Contact>(this.baseURL, newContact );
    }
  
    editContact(id: any, newContact: UpdatedContactDTO){
      return this.httpClient.put<any>(this.baseURL + '/' + id, newContact);
    }
  
    deleteContactById(id:string){
      return this.httpClient.delete(this.baseURL + '/' + id);
    }

    UploadImage(filedata : FormData, id:string):Observable<{dbPath:string}>{
      return this.httpClient.post<{dbPath:string}>(this.baseURL+ '/Upload/'+id ,filedata);
    }

    Serach(searchObject: SearchObject){
      return this.httpClient.post<Contact[]>(this.baseURL+ '/FiltersContact/',searchObject);
    }

}
