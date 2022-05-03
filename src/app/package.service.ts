import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  data:any;
  atmID:any;
  osversion:any;
  vendor:any;
  constructor() { }
  public saveData(empdata:any) {  
   this.atmID=empdata.atmid;
   this.osversion=empdata.osversion;
   this.vendor=empdata.vendor;
 } 
}
