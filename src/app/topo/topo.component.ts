import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  
  public menus = [
    { name: 'Github', url: '#', icon: 'fa-github', active: 1 },
    { name: 'Service', url: '/Service', icon: 'fa-envelope', active: 1 },
    { name: 'Contact', url: '/Contact', icon: 'fa-phone-square', active: 1 },
    { name: 'About', url: '/About', icon: 'fa-phone-square', active: 1 },
    { name: 'Other', url: '/Other', icon: 'fa-adjust', active: 0 }
  ];

  constructor() {
    this
  }

  ngOnInit() {
  }

}
