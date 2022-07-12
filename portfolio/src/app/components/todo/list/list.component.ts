import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GUID } from '../../main/helpers';
import { Card, List } from '../interfaces';

@Component({
	selector: 'kanban-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	constructor() {}

	@Input() list!: List;

	@ViewChild('listName') listNameElement!: ElementRef<HTMLInputElement>;
	public canChange: boolean = false;

	ngOnInit(): void { }

	public addCard(): void
	{
		let newCard: Card = {
			guid: GUID.newGUID(),
			name: "New Card",
			list: this.list,
			description: "",
			creationDate: Date.now()
		};
		this.list.cards.push({ key: newCard.guid, value: newCard });
	}

	public dragStart(event: DragEvent): void
	{
		console.log(event);
	}

	public dragOver(event: DragEvent): void
	{
		console.log(event);
	}
}
