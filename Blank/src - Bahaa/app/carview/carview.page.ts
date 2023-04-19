import { Component, OnInit } from '@angular/core';
import { Car, DataService } from '../data.service';

@Component({
  selector: 'app-carview',
  templateUrl: './carview.page.html',
  styleUrls: ['./carview.page.scss'],
})
export class CarviewPage implements OnInit {
  public carList: Car[] = [];
  constructor(public dataSrv: DataService) { }

  ngOnInit() {
    this.carList = this.dataSrv.carList
  }

}
