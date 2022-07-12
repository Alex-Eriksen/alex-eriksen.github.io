import { Component, OnInit } from '@angular/core';
import { GUID } from '../../main/helpers';
import { Board, List } from '../interfaces';

@Component({
	selector: 'kanban-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit
{
	constructor() {}

	public board!: Board;

	ngOnInit(): void
	{
		if (this.board !== undefined)
		{
			return;
		}

		this.board = {
			guid: GUID.newGUID(),
			name: "New Board",
			lists: [],
			listRefs: []
		};
	}

	public addList(): void
	{
		let newList: List = {
			guid: GUID.newGUID(),
			name: "New List",
			board: this.board,
			cards: []
		};
		this.board.lists.push({ key: newList.guid, value: newList });
	}
}
