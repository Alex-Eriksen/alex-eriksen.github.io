import { Component, Input, OnInit } from '@angular/core';
import { GUID } from '../../main/helpers';
import { Card, Checklist, List } from '../interfaces';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KeyValue } from '@angular/common';

@Component({
	selector: 'kanban-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	constructor() {}

	@Input() list!: List;

	public canChange: boolean = false;

	ngOnInit(): void {}

	public addCard(): void
	{
		let checkList: Checklist = {
			guid: GUID.newGUID(),
			name: "New Checklist",
			items: []
		}
		let newCard: Card = {
			guid: GUID.newGUID(),
			name: "New Card",
			list: this.list,
			description: "",
			creationDate: Date.now(),
			checklist: checkList
		};
		this.list.cards.push({ key: newCard.guid, value: newCard });
	}

	public drop(event: CdkDragDrop<KeyValue<string, Card>[]>): void
	{
		if (event.previousContainer === event.container)
		{
		  	moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		}
		else
		{
		  	transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex,
		  	);
		}
	  }
}
