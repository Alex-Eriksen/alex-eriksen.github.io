import { Component, OnInit } from '@angular/core';
import { collection, Firestore, setDoc, connectFirestoreEmulator, doc, getDoc, CollectionReference, DocumentData, collectionData, getDocs, query, where, collectionGroup } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { ArmorEquipment } from 'src/app/interfaces/equipment';
import { SearchResult } from 'src/app/interfaces/searchResult';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit
{
	constructor(private firestore: Firestore) { }

	public equipment: ArmorEquipment[] = [];

	ngOnInit(): void { }

	public async getEquipment(equipmentName: string): Promise<void>
	{
		console.log("ViewPageComponent::getEquipment()");
		const q = collectionGroup(this.firestore, 'Sword');
		const s = await getDocs(q);
		s.forEach((doc) =>
		{
			console.log(doc.id, " => ", doc.data());
		})
		// const docRef = doc(this.firestore, "Equipment", "Armor", "Chest", equipmentName);
		// const docSnap = await getDoc(docRef);
		// if (docSnap.exists())
		// {
		//   	this.equipment.push(docSnap.data() as ArmorEquipment);
		// }
		// else
		// {
		//		console.warn("No such document.");
		// }
  	}

	private async setEquipment(): Promise<void>
	{

	}

}
