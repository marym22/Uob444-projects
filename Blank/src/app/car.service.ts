import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public carList: Car[] = [
    { type: 'SUV', manufacturer: 'Toyota', model: 'Land Cruiser', color: 'White', mileage: 10000, engine: '4.5L V8', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 22000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'sedan', manufacturer: 'Toyota', model: 'Camry', color: 'White', mileage: 10000, engine: '2.5L I4', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 7000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'sedan', manufacturer: 'Toyota', model: 'Corolla', color: 'White', mileage: 10000, engine: '1.8L I4', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 8000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'sedan', manufacturer: 'Toyota', model: 'Yaris', color: 'White', mileage: 10000, engine: '1.5L I4', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 9000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'sedan', manufacturer: 'Toyota', model: 'Prius', color: 'White', mileage: 10000, engine: '1.8L I4', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 10000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'sedan', manufacturer: 'Toyota', model: 'Avalon', color: 'White', mileage: 10000, engine: '3.5L V6', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 11000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'Highlander', color: 'White', mileage: 10000, engine: '3.5L V6', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 12000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'RAV4', color: 'White', mileage: 10000, engine: '2.5L I4', specifications: ['FWD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 13000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: '4Runner', color: 'White', mileage: 10000, engine: '4.0L V6', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 14000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'Land Cruiser', color: 'White', mileage: 10000, engine: '5.7L V8', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 15000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'Sequoia', color: 'White', mileage: 10000, engine: '5.7L V8', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 16000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'Tundra', color: 'White', mileage: 10000, engine: '5.7L V8', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 4000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'Tacoma', color: 'White', mileage: 10000, engine: '4.0L V6', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 5000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
    { type: 'SUV', manufacturer: 'Toyota', model: 'FJ Cruiser', color: 'White', mileage: 10000, engine: '4.0L V6', specifications: ['4WD', 'Automatic', '4 Doors', '5 Seats'], numberOfSeats: 5, features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Power Locks', 'Power Mirrors', 'Cruise Control', 'Tilt Steering', 'AM/FM Radio', 'CD Player', 'MP3 Player', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Keyless Entry', 'Keyless Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels'], price: 6000, image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg' },
  ];
  constructor() { }
}
export class Car {
  type: string;
  manufacturer: string;
  model: string;
  color: string;
  mileage: number;
  engine: string;
  specifications: string[];
  numberOfSeats: number;
  features: string[];
  price: number;
  image: string;
  constructor(type: string, manufacturer: string, model: string, color: string, mileage: number, engine: string, specifications: string[], numberOfSeats: number, features: string[], price: number, image: string) {
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
    this.image = image;
  }

}
