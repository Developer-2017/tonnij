import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor() { }
  defaultColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
    wrapText: true,
    sortable: true,
    autoHeight: true,
  };
  colDefs = [
    {
      field: "Sno",
      filter: false,
      width:120,
      headerName: "Serial Number",
      // valueGetter: this.serialNumberGetter,
    },
    {
      field: "is_active",
      headerName: "Status",
      filter:false,
      cellRenderer: "switchRendrer",
      width:120,
      cellRendererParams: () => ({
        // isSwitchOn: (params.data as CombinedAppUser).is_approved,
        clicked: (value: boolean) => {
            // this.store.dispatch(new fromStore.UpdateCompanyStatusByAdmin({
            //   ...params.data,
            //   is_approved:value
            // }))
        },
      }),
    },
    {
      field: "contact_person_name",
      headerName: "Contact Person Name",
    },
    {
      field: "company_name",
      headerName: "Company Name",
    },
    {
      field: "address_map",
      headerName: "Address",
      // valueGetter:(params)=>this.sourceAddressGetter((params.data as CombinedAppUser).address_map)
    },
    {
      field: "company_email",
      headerName: "Email",
    },
    {
      field: "company_gst",
      headerName: "GST",
    },
    {
      field:'send',
      headerName: "Send",
      cellRenderer: "buttonRendrer",
      filter: false,
      cellRendererParams:()=>({
        buttonText:"Send",
        clicked:()=>{}
      })
    },
    {
      field:'send',
      headerName: "View Details",
      cellRenderer: "buttonRendrer",
      filter: false,
      cellRendererParams:()=>({
        buttonText:"Details",
        clicked:()=>{
          // this.dialog.open(ApprovedDocumentComponent,{data:{...params.data,shouldNotShow:true}})
        }
      })
    }
    
  ];
  ngOnInit(): void {
  }

}
