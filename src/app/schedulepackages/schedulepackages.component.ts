import { Component, OnInit,Input } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-schedulepackages',
  templateUrl: './schedulepackages.component.html',
  styleUrls: ['./schedulepackages.component.css']
})
export class SchedulepackagesComponent implements OnInit {
  list:any;
  atmid:any;
  osversion:any;
  constructor(private packageservice:PackageService) { }

  ngOnInit(): void {
    this.list=this.packageservice.data;
    this.atmid=this.packageservice.atmID;
    this.osversion=this.packageservice.osversion;
  }

}
