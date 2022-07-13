import { Component, Input, OnInit } from '@angular/core';
import { GUID } from '../../main/helpers';
import { Checklist, ChecklistItem } from '../interfaces';

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit
{
  	constructor() { }

	@Input() data!: Checklist;

  	ngOnInit(): void {}

	public addChecklistItem(): void
	{
		const newChecklistItem: ChecklistItem = {
			status: false,
			name: "New Item",
			guid: GUID.newGUID()
		};
		this.data.items.push(newChecklistItem);
	}
}
