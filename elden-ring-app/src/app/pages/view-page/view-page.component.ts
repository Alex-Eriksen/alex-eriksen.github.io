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

	public equipment: SearchResult[] = [];

	ngOnInit(): void { }

	private equipmentGroups: string[] = [
		"Helmet",
		"Chest",
		"Arms",
		"Legs",
		"Dagger",
		"Sword",
		"Whip",
		"Katana",
		"Bow",
		"Crossbow"
  	]

	public getEquipment(searchQuery: string): void
	{
		this.equipment = [];
		for (const category of this.equipmentGroups)
		{
			const currentCollection = collectionGroup(this.firestore, category);
			collectionData(currentCollection).subscribe((data) =>
			{
				if (data.length == 0)
				{
					return;
				}

				for (const document of data)
				{
					const searchResult: SearchResult = document as SearchResult;
					const searchString: string = `${searchResult.equipmentName.toLowerCase()} ${searchResult.equipmentType.toLowerCase()} ${searchResult.set.toLowerCase()}`;
					if (searchString.indexOf(searchQuery.toLowerCase()) !== -1)
					{
						this.equipment.push(searchResult);
					}
				}
			});
		}
  	}

	private async setEquipment(): Promise<void>
	{

	}
}
