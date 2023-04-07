import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})
export class Ex2Page implements OnInit {

  public name: string = "";
  
  constructor(public alertCtrl: AlertController) 
  { }

  async ShowAlert( ) 
  {
     let alert = await this.alertCtrl.create({
      header: "Select",
  	  subHeader: "Your name is " + this.name,
  	  buttons:['Dismiss']
      })
    alert.present();
  }

  ngOnInit( ) 
  { }

}
