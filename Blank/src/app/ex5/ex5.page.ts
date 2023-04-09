import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.page.html',
  styleUrls: ['./ex5.page.scss'],
})
export class Ex5Page implements OnInit {
// https://live.staticflickr.com/5681/22572758778_a9a8a6cecd_b.jpg
  public puppies = 
  [
    {name:'Ruby', img:'https://p1.pxfuel.com/preview/798/199/684/dogs-cute-puppy-animal-pet-sad.jpg'},
    {name:'Oscar', img:'https://oscars-house.square.site/uploads/b/45d2d5f9f8ca398582ff33e926233f81adf862ffceac14fa1fbcec6245f088f8/5561F2BD-7CDB-4422-8672-5A1C9D8C9E2F_1655350850.jpeg'},
    {name:'Luna', img:'https://www.asgoodasgold.org/wp-content/uploads/2019/05/Luna-Square-300x300.jpg'},
    {name:'Lola', img:'https://i.pinimg.com/564x/18/e8/7f/18e87f309528fe7412e7127953183d86.jpg'},
    {name:'Coco', img:'https://i.pinimg.com/originals/14/cf/d6/14cfd66d1a42bd1ad656a98e44900406.jpg'},
    {name:'Lilly', img:'https://daisydogtraining.co.uk/files/wp-content/uploads/puppy-daisy-photo-by-hendo-wang-on-unsplash-e1656527116434.jpg'},
    {name:'Max', img:'https://ghk.h-cdn.co/assets/17/44/1600x1600/square-1509553522-saint-bernard.jpg'},
    {name:'Charlie', img:'https://cdn1.tedsby.com/storage/1/7/1/171369/cute-dog-realistic-toy-siberian-husky.jpg'},
    {name:'Buddy', img:'https://www.asgoodasgold.org/wp-content/uploads/2022/06/Buddy-square.jpg'},
    {name:'Lucy', img:'https://i.pinimg.com/564x/00/8c/30/008c3068767fc88e6064e01e51bf0bbf.jpg'},
    {name:'Milo', img:'https://pyxis.nymag.com/v1/imgs/1a2/fec/a65ac86d410185983748202f9dc9c5bbd1-14-a-dogs-way-home.rsquare.w700.jpg'},
    {name:'Jack', img:'https://t2.ea.ltmcdn.com/en/posts/4/0/2/what_is_the_best_diet_for_a_german_shepherd_puppy_1204_600_square.jpg'},
    {name:'Cody', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ChvGLgz46oOaEt0diH7ZmZNSNmQGUbH96UMnfmx3RJnTvln-S9qXo7d8Wmu0-MjsEbU&usqp=CAU'},
    {name:'Chloe', img:'https://urban-paws.s3.eu-west-2.amazonaws.com/app/uploads/2021/05/07220951/waggpetfood_47584534_525426871298637_7183066473692984396_n.jpg'},
    {name:'Otto', img:'https://pethelpful.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:eco%2Cw_1200%2Cx_3029%2Cy_1644/MTg5NTI0OTcxMDU4Mzc0MjQx/rosalie-barley-iaxf2gdradc-unsplash.jpg'},
  ];

  public kittens =
  [
    {name:'Daisy', img:'https://i0.wp.com/thisbugslife.com/wp-content/uploads/2013/02/cute-kitten-daisy-ipad-wallpapers-1024x1024-02-1.jpg'},
    {name:'Gracie', img:'https://i.pinimg.com/originals/2f/0c/69/2f0c69b3a19c108a835aa5258de0f1f0.jpg'},
    {name:'Rosie', img:'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTYzMDkzL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjkwMTIxODI1fQ.nZMZVV_p2auPHjdf-jY67Pb1ofRLdPS8TIlnv0v4IQI/img.jpg?width=742&quality=80'},
    {name:'Kiki', img:'https://bit.ly/3zGGcsS'},
    {name:'Pumpkin', img:'https://www.warrenphotographic.co.uk/photgraphy/bigs/37689-cute-ginger-male-kitten-7-weeks-old.jpg'},
    {name:'Mocha', img:'https://assets.rbl.ms/4163594/origin.jpg'},
    {name:'Boo', img:'https://www.litter-robot.com/media//munchkin15.png'},
    {name:'Boots', img:'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200c/0_PUSS-IN-BOOTS.jpg'},
    {name:'Remi', img:'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMDA4ODYyMS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczMjM5MDA1M30.eKAku-Ur_HF_vpryYg8uRMMhxd0DWuHI3N5MpUSCCF8/img.jpg?width=742&quality=80'},
    {name:'Sunny', img:'https://www.cats.org.uk/media/5238/cat-1620968_1920-web.jpg?width=415&height=415'},
    {name:'Nugget', img:'https://t2.ea.ltmcdn.com/en/posts/5/8/1/how_to_help_a_kitten_defecate_185_orig.jpg'},
    {name:'Cheeto', img:'https://shenandoahcountyva.us/animal-shelter/wp-content/uploads/sites/3/2022/05/Cheetoh-scaled.jpg'},
    {name:'Blu', img:'https://i.pinimg.com/originals/d9/8e/54/d98e54c8f9a06537b6ec1713b6a88902.png'},
  ];

  public ducklings =
  [
    {name:'Aflac',img:'https://i.pinimg.com/originals/11/27/ea/1127ea939e8923ecd1f8a3b5d97e3b32.jpg'},
    {name:'Bill',img:'https://i.pinimg.com/736x/2e/ee/9c/2eee9c3fc02668f6cdb0daf42d4b81a2.jpg'},
    {name:'Bubbles',img:'https://i.pinimg.com/564x/a0/d7/3f/a0d73fa6a06ec41075c458ff412c298b.jpg'},
    {name:'Daffy',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8FhGGDgPpqm1K-9gOwQKM1BneO_MlQTDGF0RFU1Qe73EKxExN3_2Fh6rNJSwKGPf1VM&usqp=CAU'},
    {name:'Downy',img:'https://i.dailymail.co.uk/1s/2022/06/07/18/58798079-10893845-A_very_cute_snap_shared_by_the_account_showed_a_yellow_duckling_-a-61_1654624542284.jpg'},
    {name:'Ernie',img:'https://preview.redd.it/8oobvdhm1vzy.png?auto=webp&s=f99ff2ec4cd99c4e489be51050e5dffe2a36b84e'},
    {name:'Mallory',img:'https://i.pinimg.com/564x/3e/04/3f/3e043f8519df1b082919654fe39e9cd8.jpg'},
    {name:'Puddles',img:'https://i.pinimg.com/originals/97/a8/5b/97a85bc3c51910d26ed446239609742d.jpg'},
    {name:'Waddles',img:'https://images.fineartamerica.com/images-medium-large-5/baby-duck-stephanie-hayes.jpg'},
  ];

  @ViewChild('slides', { static: true }) slider!: IonSlides;  
  segment = 0;  

  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  

  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  

  constructor() { }

  ngOnInit() {
  }

}
