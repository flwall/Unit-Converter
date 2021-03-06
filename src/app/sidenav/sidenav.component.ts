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

  },
  {
    name: 'Mass Unit Conversions',
    component: 'mass-conversions',
    img: '../../assets/img/mass.png'
  },
  {
    name: 'Area Unit Conversions',
    component: 'area-conversions',
    img: '../../assets/img/area_units.png'
  },
  {
    name: 'Volume Unit Conversions',
    component: 'volume-conversions',
    img: '../../assets/img/volume.png'
  }


  ];


  constructor() { }

  ngOnInit() {

  }

  closeNav() {
    this.opened = false;

  }

}
