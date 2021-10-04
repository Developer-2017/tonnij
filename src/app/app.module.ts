import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { DashboardComponent } from './core/components/admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from "ngx-toastr";
import { AgGridModule } from 'ag-grid-angular';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { ApproveDocumentsComponent } from './core/components/admin/approve-documents/approve-documents.component';
import { MatDialogModule } from "@angular/material/dialog";
import { DocsStatusComponent } from './core/components/admin/docs-status/docs-status.component';
import {MatRadioModule} from '@angular/material/radio';
import { DocumentListComponent } from './core/components/admin/document-list/document-list.component';
import { ManageCompanyComponent } from './core/components/admin/manage-company/manage-company.component';
import { ManageStaffComponent } from './core/components/admin/manage-staff/manage-staff.component';
import { ManageRequestComponent } from './core/components/admin/manage-request/manage-request.component';
import { InvoiceRequestComponent } from './core/components/admin/invoice-request/invoice-request.component';
import { BroadcastComponent } from './shared/dialog/admin/broadcast/broadcast.component';
import { AddStaffComponent } from './shared/dialog/admin/add-staff/add-staff.component';
import { LoginComponent } from './login/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ApproveDocumentsComponent,
    DocsStatusComponent,
    DocumentListComponent,
    ManageCompanyComponent,
    ManageStaffComponent,
    ManageRequestComponent,
    InvoiceRequestComponent,
    BroadcastComponent,
    AddStaffComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    AgGridModule,
    NgxFileDropModule,
    NgOtpInputModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
