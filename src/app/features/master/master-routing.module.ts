
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { AgentMasterComponent } from "./agent-master/agent-master.component";
import { AgentComponent } from "./agent/agent.component";
import { CityMasterComponent } from "./city-master/city-master.component";
import { CityComponent } from "./city/city.component";
import { ConnectionTypeMasterComponent } from "./connection-type-master/connection-type-master.component";
import { ConnectionTypeComponent } from "./connection-type/connection-type.component";
//import { RoleAccessGuard } from '@app/core/guards/roleAccess.guard';

import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { DesignationComponent } from './designation/designation.component';
import { DistrictMasterComponent } from "./district-master/district-master.component";
import { DistrictComponent } from "./district/district.component";
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { EmployeeComponent } from './employee/employee.component';
import { TalukaMasterComponent } from "./taluka-master/taluka-master.component";
import { TalukaComponent } from "./taluka/taluka.component";
import { UnitMasterComponent } from './unit-master/unit-master.component';
import { UnitComponent } from "./unit/unit.component";

const routes: Routes = [
  { path: 'department-master', component: DepartmentMasterComponent },
  { path: 'department', component: DepartmentComponent  },
  { path: 'designation-master', component: DesignationMasterComponent  },
  { path: 'designation', component: DesignationComponent , },
  { path: 'employee-master', component: EmployeeMasterComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'unit-master', component:UnitMasterComponent },
  { path: 'unit', component: UnitComponent },

  { path: 'district-master', component:DistrictMasterComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'taluka-master', component:TalukaMasterComponent },
  { path: 'taluka', component: TalukaComponent },
  { path: 'city-master', component:CityMasterComponent },
  { path: 'city', component: CityComponent },
  { path: 'agent-master', component:AgentMasterComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'connection-type-master', component:ConnectionTypeMasterComponent },
  { path: 'connection-type', component: ConnectionTypeComponent },
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
  UnitMasterComponent,
  UnitComponent,
  DistrictMasterComponent,
  DistrictComponent,
  TalukaMasterComponent,
  TalukaComponent,
  CityMasterComponent,
  CityComponent,
  AgentMasterComponent,
  AgentComponent,
  ConnectionTypeMasterComponent,
  ConnectionTypeComponent
  ];