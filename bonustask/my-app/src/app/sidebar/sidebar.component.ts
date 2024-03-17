import { Component, OnInit } from '@angular/core';
import { ISidebar, sidebarItems } from '../ISidebar';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  sidebarItems: ISidebar[];

  constructor() {
    this.sidebarItems = [];
  }

  ngOnInit(): void {
    this.sidebarItems = sidebarItems;
  }
}
