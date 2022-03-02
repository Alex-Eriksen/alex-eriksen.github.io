import { Component } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { getDocs, getFirestore } from 'firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Equipment } from 'src/app/interfaces/equipment';
import { connectFirestoreEmulator } from 'firebase/firestore';

@Component({
  selector: 'app-database-load',
  templateUrl: './database-load.component.html',
  styleUrls: ['./database-load.component.css']
})
export class DatabaseLoadComponent
{
  constructor(private firestore: Firestore) { }

  public _items: Equipment[] = [];

  public async Load()
  {
    //connectFirestoreEmulator(this.firestore, 'localhost', 8081);
    const querySnapshot = await getDocs(collection(this.firestore, "Equipment"));
    querySnapshot.forEach((doc) =>
    {
      console.log(doc.id, " => ", doc.data());
    })
  }
}
