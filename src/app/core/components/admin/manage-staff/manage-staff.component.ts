import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from 'src/app/shared/dialog/admin/add-staff/add-staff.component';
@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  addStaff()
{
  this.dialog.open(AddStaffComponent);
}

  ngOnInit(): void {
  }

}
