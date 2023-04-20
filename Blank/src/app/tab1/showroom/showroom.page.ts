import { Component, OnInit } from '@angular/core';
import { CarService,Car } from '../../car.service';
@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.page.html',
  styleUrls: ['./showroom.page.scss'],
})
export class ShowroomPage implements OnInit {
  public carList: Car[] = [];
  constructor(public dataSrv:CarService) {}

  ngOnInit() {
    this.carList = this.dataSrv.carList
  }
}
