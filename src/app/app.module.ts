import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagestatusComponent } from './packagestatus/packagestatus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DeletePackageComponent } from './delete-package/delete-package.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { HomeComponent } from './home/home.component';
import { SchedulepackagesComponent } from './schedulepackages/schedulepackages.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagestatusComponent,
    HeaderComponent,
    DeletePackageComponent,
    AddPackageComponent,
    HomeComponent,
    SchedulepackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
