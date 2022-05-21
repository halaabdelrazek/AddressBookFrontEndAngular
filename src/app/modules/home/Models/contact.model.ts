export interface Contact {
  contactId?:string,
  username: string,
  email: string,
  phone: string,
  dateOfBirth: Date,
  address: string,
  image: string,
  age: string,
  department: Department,
  jobTitle: jobTitle
}

export interface CreateContactDTO {
  contactId?:string,
  username: string,
  email: string,
  phone: string,
  dateOfBirth: Date,
  address: string,
  image: string,
  age: string,
  DepartmentId: string,
  JobTitleId: string
}

export interface UpdatedContactDTO {
  contactId?:string,
  username: string,
  email: string,
  phone: string,
  dateOfBirth: Date,
  address: string,
  image: string,
  age: string,
  DepartmentId: string,
  JobTitleId: string
}



export interface Department {
  departmentId: string,
  departmentName:string
}


export interface jobTitle {
  jobTitleId: string,
  jobTitleName:string
}