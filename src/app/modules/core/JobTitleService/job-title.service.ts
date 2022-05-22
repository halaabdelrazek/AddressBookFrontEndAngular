import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobTitle } from '../../home/Models/JobTitle.model';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  baseURL: string = 'https://localhost:7080/api/JobTitle';
  // baseURL: string = 'http://halaabdelrazek-001-site1.gtempurl.com/api/JobTitle';

  constructor(private httpClient: HttpClient) { }

  getAllJobTitle(){
    return this.httpClient.get<JobTitle[]>(this.baseURL)}
}
