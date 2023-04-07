import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-lists',
  templateUrl: './ion-lists.page.html',
  styleUrls: ['./ion-lists.page.scss'],
})
export class IonListsPage implements OnInit {

  constructor() { }

  testClick()
  {
    alert('test successful');
  }

  // a method to be called when the page is loaded
  ngOnInit() {
    alert('page loaded');
    // testClick();
  }

}
