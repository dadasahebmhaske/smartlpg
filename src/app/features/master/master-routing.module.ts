
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
//import { RoleAccessGuard } from '@app/core/guards/roleAccess.guard';

import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'department-master', component: DepartmentMasterComponent },
  { path: 'department', component: DepartmentComponent  },
  { path: 'designation-master', component: DesignationMasterComponent  },
  { path: 'designation', component: DesignationComponent , },
  { path: 'employee-master', component: EmployeeMasterComponent },
  { path: 'employee', component: EmployeeComponent },
 
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const routing = [RouterModule.forChild(routes)]
//export class MasterRoutingModule { }
export const componentArray = [
  DepartmentMasterComponent,
  DepartmentComponent,
  DesignationMasterComponent,
  DesignationComponent,
  EmployeeComponent, 
  EmployeeMasterComponent, 
  ];