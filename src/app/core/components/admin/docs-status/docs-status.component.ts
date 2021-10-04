import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-status',
  templateUrl: './docs-status.component.html',
  styleUrls: ['./docs-status.component.scss']
})
export class DocsStatusComponent implements OnInit {
  public zoomGallery = false;
  constructor() { }

  ngOnInit(): void {
  }

}
