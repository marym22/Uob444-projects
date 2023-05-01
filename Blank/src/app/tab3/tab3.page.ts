import { Component, OnInit } from '@angular/core';
import { AuthService,users } from '../auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  user:users={}as users;
//  public user:Observable<users[]>;
  constructor(public d:AuthService) {
  }

ngOnInit(): void {

}



  addUser(){

  }
  updateUser(){

}
deleteUser(){

}

}
