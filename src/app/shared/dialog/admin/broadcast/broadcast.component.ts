import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BroadcastComponent>,
    private dialog: MatDialog,) { }
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
