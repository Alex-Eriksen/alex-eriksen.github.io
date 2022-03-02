import { Component, OnInit } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { doc, getDocs, setDoc } from 'firebase/firestore';
import { Equipment } from 'src/app/interfaces/equipment';
import { connectFirestoreEmulator } from 'firebase/firestore';

const kaidenHelm = {
  "set": "kaiden",
  "type": "head",
  "weight": 4.0,
  "damageNegation":
  {
    "Physical": 4.4,
    "Strike": 3.4,
    "Slash": 4.4,
    "Pierce": 4.4,
    "Magic": 3.1,
    "Fire": 3.4,
    "Lightning": 2.8,
    "Holy": 3.1
  },
  "resistance":
  {
    "Immunity": 12,
    "Robustness": 22,
    "Focus": 9,
    "Vitality": 9,
    "Poise": 5
  }
}

@Component({
  selector: 'app-database-load',
  templateUrl: './database-load.component.html',
  styleUrls: ['./database-load.component.css']
})
export class DatabaseLoadComponent implements OnInit
{
  constructor(private firestore: Firestore) { }
  ngOnInit(): void
  {
    connectFirestoreEmulator(this.firestore, 'localhost', 8081);
  }

  public _items: Equipment[] = [];

  public async Set()
  {
    await setDoc(doc(this.firestore, "Equipment", "Kaiden Helm"), kaidenHelm);
  }

  public async Load()
  {
    const querySnapshot = await getDocs(collection(this.firestore, "Equipment"));
    querySnapshot.forEach((doc) =>
    {
      this._items.push(doc.data() as Equipment);
    })
  }
}
