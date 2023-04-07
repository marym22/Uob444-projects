import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic-lists',
  templateUrl: './ionic-lists.page.html',
  styleUrls: ['./ionic-lists.page.scss'],
})
export class IonicListsPage implements OnInit {

  constructor() { }

  testClick()
  {
    alert('test successful');
  }
  
  ngOnInit() {
  }

}
