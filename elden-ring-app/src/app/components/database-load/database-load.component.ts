import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, connectFirestoreEmulator, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-database-load',
  templateUrl: './database-load.component.html',
  styleUrls: ['./database-load.component.css']
})
export class DatabaseLoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {

  }

  public async testLoad()
  {
    const app = initializeApp(environment.firebaseConfig);

    const db = getFirestore(app);

    connectFirestoreEmulator(db, 'localhost', 4200);

    const equipmentRef = collection(db, "Equipment");

    await setDoc(doc(equipmentRef, "Head"),
    {
      physical: 4.20
    })
  }


}
