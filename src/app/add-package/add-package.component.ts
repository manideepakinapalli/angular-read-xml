import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  addPackage:any;

  constructor(private packageservice:PackageService,private router:Router) { }
  vendorNames=[
    {id:"HYOSUNG",label:"HYOSUNG"},
    {id:"NCR",label:"NCR"},
    {id:"DIEBOLD",label:"DIEBOLD"},
    {id:"DN",label:"DN"}
  ]
  versions=[
    {id:"W10",label:"Windows 10"},
    {id:"W7",label:"Windows 7"}
  ];

  ngOnInit(): void {
    this.addPackage=new FormGroup({
      'vendor':new FormControl(null,Validators.required),
      'osversion':new FormControl(null,Validators.required),
      'packagenew':new FormControl(null,Validators.required)
    });
  }
  newPackageForm(value:any) {  
    this.packageservice.saveData(value);  
    this.router.navigate(['schedulePackage']);
}  
}
