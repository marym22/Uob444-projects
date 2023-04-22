import { Injectable, OnInit } from '@angular/core';
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
export class AuthService implements OnInit {
  public user: Observable<users[]>;
  public userCollection:AngularFirestoreCollection<users>;

  constructor(public auth:AngularFireAuth,public afs:AngularFirestore,public n:NavController) {
    this.userCollection=this.afs.collection<users>('USERS');
    this.user=this.userCollection.snapshotChanges().pipe(
    map(actions=>{
    return actions.map(a=>{
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
.then(()=>{alert('login in succssfully');this.n.navigateForward("/tabs/tab1")})
.catch((error)=>{alert(error)});
  }
signup(email:string,pass:string,user:users){
  this.auth.createUserWithEmailAndPassword(email,pass)
    .then(()=>{this.adduser(user).then((response)=>{
      alert("Inserted Successfully");this.n.navigateForward("/tabs/tab1")
      user={}as users;
     })
    }
    )
    .catch((erorr)=>{alert(erorr)});
  }

  updatepro(us: users): Promise<void> {
        return this.userCollection.doc(us.id).update({ UserName: us.UserName, Email: us.Email });
      }
    

}