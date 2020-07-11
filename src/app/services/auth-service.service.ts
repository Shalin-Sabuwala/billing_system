import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
// import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(
    private router: Router,
     private db: AngularFireDatabase, 
     private afAuth: AngularFireAuth, 
     private firestore: AngularFirestore, 
     private ngZone: NgZone,
     private toastr: ToastrService
     ) {
      }



 async signinUser(email: string, password: string) {

    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        // check in users collection
        this.firestore.collection('user', ref => ref.where('email', '==', user.user.email)).snapshotChanges().subscribe(actionArray => {
          
          if (actionArray.length > 0) {
            this.firestore.collection("user").ref.where("email", "==", user.user.email).onSnapshot(snap => {
              snap.forEach(userRef => {
                console.log("userRef", userRef.data());
                firebase.auth().currentUser.getIdToken()
                  .then(
                    async (token: string) => {
                      localStorage.setItem("token", token);
                      localStorage.setItem("uid", firebase.auth().currentUser.uid);
                    }
                  )
                  this.router.navigate(["/dashboard"]);
              })
            })
          }

        }
        )
      }).catch(err => err)
  }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        console.log("user signed Out successfully");
        //set current user to null to be logged out
        this.ngZone.run(() => this.router.navigate(["/login"]));

      }).catch((err) => {
        console.log(err);
      })

    // this.router.navigate(['/login']);
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    this.toastr.success("Email Sent Successfully")
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

 
}

