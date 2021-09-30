import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "admin",
    component: DashboardComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
    ],
    // canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
