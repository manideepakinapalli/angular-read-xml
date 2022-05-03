import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as converter from 'xml-js';
import {PackageService} from '../package.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packagestatus',
  templateUrl: './packagestatus.component.html',
  styleUrls: ['./packagestatus.component.css']
})
export class PackagestatusComponent implements OnInit {
  constructor(private packageservice: PackageService,private router: Router){}
  list: any = [];
  errorMsgString="Sorry Wrong Xml";
  unique:any = new Set<string>();
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
  exform: any;
  file:any;
  errorMsg:any;
  ngOnInit(): void {
    this.exform=new FormGroup({
      'atmid':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]{4}_[0-9]{4}')]),
      'vendor':new FormControl(null,Validators.required),
      'osversion':new FormControl(null,Validators.required),
      'versionsfile':new FormControl(null,Validators.required)
    });
  }
  getFilename(name: string) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename: string | null | undefined) {
    return (filename != '' && filename != undefined && filename != null) ? filename.split('.').pop() : '';
  }
  clickSub(): void{
  }
  selectFile(event:any) {
    this.file = event.target.files[0];
     if (this.getFileExtension(this.file.name) != 'xml') {
      this.errorMsg= true;
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let xml = e.target.result;
      let result1 = converter.xml2json(xml, { compact: true, spaces: 2 });
      let JSONData:any = JSON.parse(result1);
      let uidJSON = JSONData.VERSIONS.PRODUCT;
      for(let i = 0; i < uidJSON.length;i++){
        let data = uidJSON[i].VER;
        for(let j = 0; j < data.length; j++) {
          if(data[j].UID._text != "N/A" && data[j].UID._text != "FULL_FUNCTION_MULTI_DENOMINATION"){ 
            data[j].UID._text = data[j].UID._text.split('_')[0];
            this.unique.add(data[j].UID._text);  
          }
        };
      }
      this.list = Array.from(this.unique.values());
    }
    reader.readAsText(event.target.files[0])
  }
  SaveFormData() {  
    this.packageservice.saveData(this.exform.value);
    this.packageservice.data=this.list;  
    this.router.navigate(['schedulePackage']);
}  
}
