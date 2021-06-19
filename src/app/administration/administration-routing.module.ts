import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

import { AdministrationComponent } from './administration.component';
import { MaintenanceAuthorizationComponent } from './maintenance-authorization/maintenance-authorization.component';
import {DocumentsutilityComponent} from './documentsutility/documentsutility.component';

const routes: Routes = [
{ path: '', component: AdministrationComponent },
{ path: 'vendorlist', component: VendorlistComponent },
{ path : 'maintainauthorization',component: MaintenanceAuthorizationComponent},
{path: 'documentsutility',component: DocumentsutilityComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
