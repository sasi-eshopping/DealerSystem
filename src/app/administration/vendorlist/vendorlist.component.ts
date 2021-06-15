import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  showtable:boolean=true;
  tableData:any=[];
  constructor() {

   }

  ngOnInit(): void {
   
    this.showtableData();
    var table = $('#vendorlist').DataTable({
      dom: "<'row'<'col-sm-3'l><'col-sm-3'f><'col-sm-6'p>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
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
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},
{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
},{
  vendorId:"32445",
  vendorName:"Bosch",
  vendorAddress:"South Field,MI",
  vendorSiteCode:"BD63",
  lastUpdate:"Sep 27,2016",
}
] 
}

}
