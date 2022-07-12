import { Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../interfaces';
import { CardModalComponent } from '../modals/card-modal/card-modal.component';

@Component({
	selector: 'kanban-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	constructor(public dialog: MatDialog) {}

	@Input() card!: Card;

	ngOnInit(): void { }

	public openCard(): void
	{
		let dialogRef = this.dialog.open(CardModalComponent, {
			width: '250px',
			height: '400px',
			data: this.card
		});

		dialogRef.afterClosed().subscribe(result =>
		{
			console.log('Dialog was closed.');
		});
	}
}
