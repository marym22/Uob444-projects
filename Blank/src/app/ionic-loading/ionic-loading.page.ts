import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ionic-loading',
  templateUrl: './ionic-loading.page.html',
  styleUrls: ['./ionic-loading.page.scss'],
})
export class IonicLoadingPage implements OnInit {

  constructor( public loadingCtrl: LoadingController ) 
  { }
  
  async presentLoading( ) 
  {
    const loader = await this.loadingCtrl.create({
      message: "Please wait...",
      duration: 3000
    });
    await loader.present();
  }

  ngOnInit( ) 
  { }

}