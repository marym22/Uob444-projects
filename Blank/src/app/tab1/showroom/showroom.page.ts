import { Component, OnInit } from '@angular/core';
import { CarService,Car } from '../../car.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.page.html',
  styleUrls: ['./showroom.page.scss'],
})
export class ShowroomPage implements OnInit {
  public carList: Car[] = [];
  constructor(public dataSrv:CarService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.carList = this.dataSrv.carList;
    const id = this.route.snapshot.paramMap.get('id');

  }
}
