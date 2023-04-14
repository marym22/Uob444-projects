import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor() { }
}
export class Car {
  type: string;
  manufacturer: string;
  model: string;
  color: string;
  mileage: number;
  engine: string;
  specifications: string;
  numberOfSeats: number;
  features: string;
  price: number;
  constructor(type: string, manufacturer: string, model: string, color: string, mileage: number, engine: string, specifications: string, numberOfSeats: number, features: string, price: number) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
    this.engine = engine;
    this.specifications = specifications;
    this.numberOfSeats = numberOfSeats;
    this.features = features;
    this.price = price;
  }


}