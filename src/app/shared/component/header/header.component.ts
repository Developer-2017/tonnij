import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BroadcastComponent } from '../../dialog/admin/broadcast/broadcast.component';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showHead: boolean = true;
  clickedIndex = -1;
  toggleMenu=false;
  constructor(private dialog : MatDialog,
    private router: Router) {   
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
          console.log(event)
        if (event['url'] == '/login' || event['url'] == '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
  toggle() {
    this.toggleMenu = !this.toggleMenu
  }
  sendBroadcast(){
    this.dialog.open(BroadcastComponent);
  }
  ngOnInit(): void {
  }

}
