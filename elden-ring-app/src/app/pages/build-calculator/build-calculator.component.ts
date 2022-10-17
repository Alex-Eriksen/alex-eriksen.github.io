import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { collectionGroup } from 'firebase/firestore';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-build-calculator',
  templateUrl: './build-calculator.component.html',
  styleUrls: ['./build-calculator.component.css']
})
export class BuildCalculatorComponent implements OnInit
{
	public currentCharacter: Character = { arms: null, chest: null, helmet: null, legs: null, mainHand: null, offHand: null };
	public comparisonCharacter: Character = { arms: null, chest: null, helmet: null, legs: null, mainHand: null, offHand: null };
	public helmets: any[] = [];

  	constructor(private firestore: Firestore) { }

	ngOnInit(): void { }

	public async getAllOfType(type: string): Promise<void>
	{
		this.helmets = [];
		const typeCollection = collectionGroup(this.firestore, type);
		const docs = await getDocs(typeCollection);
		for (let doc of docs.docs)
		{
			if (type == 'Helmet')
			{
				this.helmets.push(doc.data());
			}
		}
	}
}
