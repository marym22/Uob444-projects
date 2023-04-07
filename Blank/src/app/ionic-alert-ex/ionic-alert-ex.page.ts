import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ionic-alert-ex',
  templateUrl: './ionic-alert-ex.page.html',
  styleUrls: ['./ionic-alert-ex.page.scss'],
})
export class IonicAlertExPage implements OnInit {
  
  constructor( public alertCtrl: AlertController ) 
  { }
  
  async showAlert( ) 
  {
    let alert = await this.alertCtrl.create 
    ({
      header: 'Alert',
      subHeader: 'New Request',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    
    alert.present();
  }
  
  async showConfirm( ) 
  {
    let confirm = await  this.alertCtrl.create
    ({
      header: 'Use this?',
      message: 'Do you agree?',
      buttons: 
      [
        {
          text: 'Disagree',
          handler: () => { alert('Disagree clicked'); }
        },
        
        {
          text: 'Agree',
          handler: () => { alert('Agree clicked'); }
        }
      ]
    });
    
    await confirm.present();
}


  ngOnInit( ) 
  { }

}
