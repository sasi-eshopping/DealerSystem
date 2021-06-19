import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DocumentsutilityComponent} from './documentsutility/documentsutility.component';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { DataTablesModule} from 'angular-datatables';
import { MaintenanceAuthorizationComponent } from './maintenance-authorization/maintenance-authorization.component';


@NgModule({
  declarations: [AdministrationComponent, VendorlistComponent,MaintenanceAuthorizationComponent,DocumentsutilityComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    DataTablesModule
    
  ],
  exports:[AdministrationComponent, VendorlistComponent,MaintenanceAuthorizationComponent,DocumentsutilityComponent]
})
export class AdministrationModule { }
