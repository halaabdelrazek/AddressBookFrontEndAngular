import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../../home/Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // baseURL: string = 'https://localhost:7080/api/Department';
  baseURL: string = 'http://halaabdelrazek-001-site1.gtempurl.com/api/Department';

  constructor(private httpClient: HttpClient) { }

  getAllDepartments(){
    return this.httpClient.get<Department[]>(this.baseURL)}

  

}
