import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddStaffComponent>,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
