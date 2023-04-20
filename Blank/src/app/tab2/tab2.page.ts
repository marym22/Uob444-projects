import { CarService,Car } from '../car.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public carList: Car[] = [];
  constructor(public dataSrv:CarService) {}

  ngOnInit() {
    this.carList = this.dataSrv.carList
  }
  
}