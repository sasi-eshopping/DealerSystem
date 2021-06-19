import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import {AdminserviceService}  from '../adminservice.service';


interface Documentsutility
{
  index : String,
  program : String,
  filename : String,
  filesize : Number,
  mimetype: String,
  updatedby: String
}

@Component({
  selector: 'app-documentsutility',
  templateUrl: './documentsutility.component.html',
  styleUrls: ['./documentsutility.component.scss']
})
export class DocumentsutilityComponent implements OnInit {

  constructor(private service : AdminserviceService) { }

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  pages = [];
  dtTrigger: Subject<any> = new Subject();
  tableData:any=[];
  untilitydata:Documentsutility[];

  ngOnInit(): void {
    this.dtOptions = {
      dom: "<'row'<'col-md-2'f>><'row'<'col-lg-12't>><'row'<'col-lg-3'i><'col-lg-7'><'col-lg-2'>>",
      pageLength:5
     }
    
    this.showtableData();
  }
  changPage(page): void {
   
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
    dtInstance.page(parseInt(page)-1).draw(false);
   });
  }
  changPageString(page)
  {
   
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.page(page).draw(false);
     }); 
  }


  ngAfterViewInit(): void {
    $.fn.dataTable.ext.errMode = 'none';
  }

  ngOnDestroy(): void {
    
    this.dtTrigger.unsubscribe();
  }

  showtableData()
  {
    this.service.getAPI('assets/utilitydata.json').subscribe(data=>{
     this.untilitydata=data.body;
      console.log('response',this.untilitydata);
     
      this.dtTrigger.next();
      this.pages=[];
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        
       
      for(let i=0;i<dtInstance.page.info().pages;i++)
      {
        this.pages.push(String(i+1));
      }
     
        });
       
    })
    
   
  }
}
