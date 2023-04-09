import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic-datetime',
  templateUrl: './ionic-datetime.page.html',
  styleUrls: ['./ionic-datetime.page.scss'],
})
export class IonicDatetimePage implements OnInit {

  public defDate = new Date().toISOString();
  public minMaxDate = new Date().toISOString();
  public displayFormatDate = new Date().toISOString();
  public customDate = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  }

}
