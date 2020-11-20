
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
//import { RoleAccessGuard } from '@app/core/guards/roleAccess.guard';

import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationMasterComponent } from './designation-master/designation-master.component';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { EmployeeComponent } from './employee/employee.component';
import { AccountComponent } from './account/account.component';
import { AccountMasterComponent } from './account-master/account-master.component';
import { ItemsComponent } from './items/items.component';
import { ItemsMasterComponent } from './items-master/items-master.component';
import { ItemCategoriesComponent } from './item-categories/item-categories.component';
import { ItemCategoriesMasterComponent } from './item-categories-master/item-categories-master.component';
import { GodownComponent } from './godown/godown.component';
import { GodownMasterComponent } from './godown-master/godown-master.component';
import { ClosingStockComponent } from './closing-stock/closing-stock.component';
import { ClosingStockMasterComponent } from './closing-stock-master/closing-stock-master.component';
import { AdminChargesComponent } from './admin-charges/admin-charges.component';
import { AdminChargesMasterComponent } from './admin-charges-master/admin-charges-master.component';
import { DeliverymanComponent } from './deliveryman/deliveryman.component';
import { DeliverymanMasterComponent } from './deliveryman-master/deliveryman-master.component';
import { CylinderRateMasterComponent } from './cylinder-rate-master/cylinder-rate-master.component';
import { CylinderRateComponent } from './cylinder-rate/cylinder-rate.component';
import { GroupMasterComponent } from './group-master/group-master.component';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { UserRightsMasterComponent } from './user-rights-master/user-rights-master.component';


const routes: Routes = [
  { path: 'department-master', component: DepartmentMasterComponent },
  { path: 'department', component: DepartmentComponent  },
  { path: 'designation-master', component: DesignationMasterComponent  },
  { path: 'designation', component: DesignationComponent , },
  { path: 'employee-master', component: EmployeeMasterComponent },
  { path: 'employee', component: EmployeeComponent },

  { path: 'account', component: AccountComponent , },
  { path: 'account-master', component: AccountMasterComponent  },
  { path: 'items', component: ItemsComponent , },
  { path: 'items-master', component: ItemsMasterComponent  },
  { path: 'item-categories', component: ItemCategoriesComponent , },
  { path: 'item-categories-master', component: ItemCategoriesMasterComponent  },
  { path: 'godown', component: GodownComponent , },
  { path: 'godown-master', component: GodownMasterComponent  },
  { path: 'closing-stock', component: ClosingStockComponent , },
  { path: 'closing-stock-master', component: ClosingStockMasterComponent  },
  { path: 'admin-charges', component: AdminChargesComponent , },
  { path: 'admin-charges-master', component: AdminChargesMasterComponent  },

  { path: 'deliveryman', component: DeliverymanComponent , },
  { path: 'deliveryman-master', component: DeliverymanMasterComponent  },
  { path: 'cylinder-rate', component: CylinderRateComponent , },
  { path: 'cylinder-rate-master', component: CylinderRateMasterComponent  },
  { path: 'group', component: GroupComponent , },
  { path: 'group-master', component: GroupMasterComponent  },
  { path: 'user', component: UserComponent , },
  { path: 'user-master', component: UserMasterComponent  },
  { path: 'user-rights', component: UserRightsComponent , },
  { path: 'user-rights-master', component: UserRightsMasterComponent  },
  
 
 
 
 
 
 
 
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
  AccountComponent,
  AccountMasterComponent,
  ItemsComponent,
  ItemsMasterComponent,
  ItemCategoriesComponent,
  ItemCategoriesMasterComponent,
  GodownComponent,
  GodownMasterComponent,
  ClosingStockComponent,
  ClosingStockMasterComponent,
  AdminChargesComponent,
  AdminChargesMasterComponent,
  DeliverymanComponent,
  DeliverymanMasterComponent,
  CylinderRateComponent,
  CylinderRateMasterComponent,
  GroupComponent,
  GroupMasterComponent,
  UserComponent,
  UserMasterComponent,
  UserRightsComponent,
  UserRightsMasterComponent,


  ];