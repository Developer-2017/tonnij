import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/admin/dashboard/dashboard.component';
import { DocumentListComponent } from './core/components/admin/document-list/document-list.component';
import { ManageCompanyComponent } from './core/components/admin/manage-company/manage-company.component';
import { ManageStaffComponent } from './core/components/admin/manage-staff/manage-staff.component';
import { ManageRequestComponent } from './core/components/admin/manage-request/manage-request.component';
import { InvoiceRequestComponent } from './core/components/admin/invoice-request/invoice-request.component';
import { LoginComponent } from './login/login/login.component';
const routes: Routes = [
  {
    path: "admin",
    // component: LoginComponent,
    children: [
      {path: "dashboard", component: DashboardComponent },
      {path : "document-list" , component : DocumentListComponent},
      {path : "manage-company", component: ManageCompanyComponent },
      {path : "manage-staff", component: ManageStaffComponent },
      {path : "web-request" , component : ManageRequestComponent},
      {path : "invoice-request" , component : InvoiceRequestComponent},
    ],
    // canActivate: [UserGuard],
  },
      {path : "" , component : LoginComponent},
      {path : "login" , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
