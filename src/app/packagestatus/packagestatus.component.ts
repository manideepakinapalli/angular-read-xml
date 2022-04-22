import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as converter from 'xml-js';
@Component({
  selector: 'app-packagestatus',
  templateUrl: './packagestatus.component.html',
  styleUrls: ['./packagestatus.component.css']
})
export class PackagestatusComponent implements OnInit {
  list: any = []
  vendorNames=[
    {id:1,label:"HYOSUNG"},
    {id:2,label:"NCR"},
    {id:3,label:"DIEBOLD"},
    {id:4,label:"DN"}
  ]
  versions=[
    {id:1,label:"Windows 10"},
    {id:2,label:"Windows 7"}
  ];
  exform: any;
  file:any;
  localUrl: any[] | undefined;
  ngOnInit(): void {
    this.exform=new FormGroup({
      'atmid':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]{4}[0-9]{4}')]),
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
      alert("Wrong XML");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let xml = e.target.result;
      let result1 = converter.xml2json(xml, { compact: true, spaces: 2 });
      // console.log(xml)
      // console.log(result1)
      let JSONData:any = JSON.parse(result1);
      //console.log(JSONData);
      this.list = [];
      
      if(Array.isArray(JSONData.employees.employee))
      {
        for(let i of JSONData.employees.employee)
        {
          //console.log(i);
          let tempdata:any={
          email:i.email._text,
          mobile:i.mobile._text,
          name:i.name._text,
        }
      this.list.push(tempdata);
        }
      }
    
    }

    reader.readAsText(event.target.files[0])
  }
}
