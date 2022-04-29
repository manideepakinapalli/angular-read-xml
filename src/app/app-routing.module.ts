import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackageComponent } from './add-package/add-package.component';
import { DeletePackageComponent } from './delete-package/delete-package.component';
import { PackagestatusComponent } from './packagestatus/packagestatus.component';
import { SchedulepackagesComponent } from './schedulepackages/schedulepackages.component';

const routes: Routes = [
  {path:'packagestatus',component: PackagestatusComponent},
  {path:'addPackage',component: AddPackageComponent},
  {path:'deletePackage',component: DeletePackageComponent},
  {path:'schedulePackage',component: SchedulepackagesComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
