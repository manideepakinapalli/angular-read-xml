import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackageComponent } from './add-package/add-package.component';
import { DeletePackageComponent } from './delete-package/delete-package.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackagestatusComponent } from './packagestatus/packagestatus.component';
import { SchedulepackagesComponent } from './schedulepackages/schedulepackages.component';

const routes: Routes = [
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'packagestatus',component: PackagestatusComponent},
  {path:'addPackage',component: AddPackageComponent},
  {path:'deletePackage',component: DeletePackageComponent},
  {path:'schedulePackage',component: SchedulepackagesComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
