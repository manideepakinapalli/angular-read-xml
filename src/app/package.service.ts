import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  data:any;
  constructor() { }
  public SaveEmployee(empdata:any) {  
   console.log("manideep",empdata); 
 } 
}
