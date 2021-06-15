import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

import { AdministrationComponent } from './administration.component';

const routes: Routes = [
{ path: '', component: AdministrationComponent },
{ path: 'vendorlist', component: VendorlistComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
