import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {AdminserviceService}  from '../adminservice.service';
import { Subject } from 'rxjs';
declare var $: any;

interface Persons
{
  vendorId : String,
  vendorName : String,
  vendorAddress : String,
  vendorSiteCode : String,
  lastUpdate : String,
  updatedBy : String
}
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {
 persons:Persons[];
  constructor(private service : AdminserviceService)
 {

 }
 
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  pages=[];
  dtTrigger: Subject<any> = new Subject();
  tableData:any=[];
 
  ngOnInit(): void {
   
    this.dtOptions = {
      dom: "<'row'<'col-md-2'f>><'row'<'col-lg-12't>><'row'<'col-lg-3'i><'col-lg-7'><'col-lg-2'>>",
      pageLength:5
     }
    
    this.showtableData();
    
  }

  changPage(page): void {
    console.log('inside method',page);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
    console.log('Page numbers',dtInstance.page.len());
    dtInstance.page(parseInt(page)-1).draw(false);
    console.log('page changed');
    
    });
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      console.log('No Pages',dtInstance.page.info().pages);
     
    for(let i=0;i<dtInstance.page.info().pages;i++)
    {
      //this.pages.push(i+1);
    }
    console.log('Page Array',this.pages);
      });
  }


  ngAfterViewInit(): void {
    //this.dtTrigger.next();
    
    $.fn.dataTable.ext.errMode = 'none';
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
    this.service.getAPI('assets/data.json').subscribe(data=>{
     this.persons=data.body;
      console.log('response',this.persons);
     
      this.dtTrigger.next();
      this.pages=[];
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        console.log('No Pages',dtInstance.page.info().pages);
       
      for(let i=0;i<dtInstance.page.info().pages;i++)
      {
        this.pages.push(String(i+1));
      }
      console.log('Page Array',this.pages);
        });
       
    })
    
   
  }

}
