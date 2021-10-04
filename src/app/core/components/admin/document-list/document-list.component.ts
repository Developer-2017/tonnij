import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  public defaultColDef : any;
  colDefs: any[];
  constructor() {this.defaultColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
    wrapText: true,
    sortable: true,
    autoHeight: true,
  };
  this.colDefs = [
    {
      field: "Sno",
      filter: false,
      headerName: "Serial Number",
      // valueGetter: this.serialNumberGetter,
    },
    {
      field: "user_first_name_elm",
      headerName: "First Name",
    },
    {
      field: "user_last_name",
      headerName: "Last Name",
    },
    {
      field: "user_email_elm",
      headerName: "Email",
    },
    {
      field: "company_name",
      headerName: "Company Name",
    },
    {
      field: "company_phone",
      headerName: "Company Phone",
    },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: "buttonRendrer",
      filter: false,
      cellRendererParams:()=>({
        buttonText:"Preview",
        clicked:()=>{}
      })
    },
  ] 
}
  ngOnInit(): void {
  }

}
