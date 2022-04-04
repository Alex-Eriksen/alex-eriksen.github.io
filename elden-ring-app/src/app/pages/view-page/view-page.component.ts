import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { collection, Firestore, setDoc, connectFirestoreEmulator, doc, getDoc } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  public equipment: DocumentData[] = [];

  ngOnInit(): void
  {
    if (environment.emulator)
    {
      connectFirestoreEmulator(this.firestore, "localhost", 8081);
      this.setEquipment();
      console.warn("Connected to emulator.");
    }
  }

  public async getEquipment(equipmentName: string): Promise<void>
  {
    const docRef = doc(this.firestore, "cities", equipmentName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists())
    {
      console.log("Document Data: ", docSnap.data());
      this.equipment[0] = docSnap.data();
    }
    else
    {
      console.log("No such document.");
    }
  }

  private async setEquipment(): Promise<void>
  {
    const citiesRef = collection(this.firestore, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
  }

}
