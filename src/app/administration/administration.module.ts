import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';


@NgModule({
  declarations: [AdministrationComponent, VendorlistComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  exports:[AdministrationComponent, VendorlistComponent]
})
export class AdministrationModule { }
