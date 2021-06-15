import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

 @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  tableData:any=[];
  ngOnInit(): void {
    this.showtableData();
    this.dtOptions = {
      data: this.tableData,
      columns: [{
        title: 'Vendor Id',
        data: 'vendorId'
      }, {
        title: 'Vendor Name',
        data: 'vendorName'
      },
      {
        title: 'Address',
        data: 'vendorAddress'
      },
      {
        title: 'Site Code',
        data: 'vendorSiteCode'
      },
      {
        title: 'Last update',
        data: 'lastUpdate'
      },
     {
      title:'Updated By',
      data:'updatedBy'
     }]
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
 
  
  showtableData()
  {
   
  this.tableData= [{
   vendorId:"32445",
   vendorName:"Bosch",
   vendorAddress:"South Field,MI",
   vendorSiteCode:"BD63",
   lastUpdate:"Sep 27,2016",
   updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
  updatedBy:"andrews"
}
] 
}

}
