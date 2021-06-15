import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [AdministrationComponent, VendorlistComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    DataTablesModule
    
  ],
  exports:[AdministrationComponent, VendorlistComponent]
})
export class AdministrationModule { }
