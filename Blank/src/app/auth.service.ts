import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface users{
  id?:string,
UserName:string,
Email:string,
password:string,
confirmpass:string
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<users[]>;
  public userCollection:AngularFirestoreCollection<users>;

  constructor(public s:Storage,public auth:AngularFireAuth,public afs:AngularFirestore) {
    this.userCollection=this.afs.collection<users>('USERS');
    this.user=this.userCollection.snapshotChanges().pipe(
    map(actions=>{
    return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; })=>{
    const data=a.payload.doc.data();
    const id=a.payload.doc.id;
    return {id,...data};
    });
    })
    );
   }
ngOnInit(): void {}


authentication(email:string,password:string){}
adduser(us:users):Promise<DocumentReference>{
  return this.userCollection.add(us); 
  }

  signin(email:string,password:string){
this.auth.signInWithEmailAndPassword(email,password)
.then(()=>{alert('login in succssfully')})
.catch((error: any)=>{alert(error)});
  }
signup(email:string,pass:string,user:users){
  this.auth.createUserWithEmailAndPassword(email,pass)
    .then(()=>{this.adduser(user).then((response)=>{
      alert("Inserted Successfully");
      user={}as users;
     })
    }
    )
    .catch((erorr: any)=>{alert(erorr)});
  }


}
