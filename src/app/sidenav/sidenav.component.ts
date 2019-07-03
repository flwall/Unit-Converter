import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened = false;


  converters = [{
    name: 'Length Unit Conversions',
    component: 'length-conversions',
    img: '../../assets/img/lengths.png'

  }];


  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    this.opened = false;

  }

}
