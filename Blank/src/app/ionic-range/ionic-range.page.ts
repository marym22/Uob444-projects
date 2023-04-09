import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic-range',
  templateUrl: './ionic-range.page.html',
  styleUrls: ['./ionic-range.page.scss'],
})
export class IonicRangePage implements OnInit {

  public value: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
