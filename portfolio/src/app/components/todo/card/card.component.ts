import { Component, Input, OnInit} from '@angular/core';
import { Card } from '../interfaces';

@Component({
	selector: 'kanban-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	constructor() {}

	@Input() card!: Card;

	ngOnInit(): void { }

	public openCard(): void
	{
		console.log(this.card);
	}
}
