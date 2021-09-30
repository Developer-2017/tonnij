import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clickedIndex = -1;
  toggleMenu=false;
  constructor() { }

  ngOnInit(): void {
  }

}
