import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  public count= 0;

  constructor( ) 
  { }
  
  TapMe( ) 
  {
    this.count++;
  }
  
  Reset( ) 
  {
    this.count = 0;
  }

  ngOnInit() {
  }

}
