import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {

number1 = 0;
number2 = 0;
answer = 0;

constructor(public alertCtrl: AlertController) 
{ }

Add()
{
this.answer = Number(this.number1) + Number(this.number2);
}

Subtract()
{
  this.answer = Number(this.number1) - Number(this.number2);
}

Multiply() 
{
  this.answer = Number(this.number1) * Number(this.number2);
}

Divide() 
{
  this.answer = Number(this.number1) / Number(this.number2);
}

  ngOnInit() {
  }

}
