import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ionic-slides',
  templateUrl: './ionic-slides.page.html',
  styleUrls: ['./ionic-slides.page.scss'],
})


export class IonicSlidesPage implements OnInit {  
  
  @ViewChild('Slides', { static: true })
  slides!: IonSlides;

   NextSlide(){
 this.slides.slideNext();
 }
   PrevSlide(){
 this.slides.slidePrev();
 }


  constructor( ) { }

  ngOnInit() {
  }

}
