import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../../interfaces';

@Component({
  selector: 'card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent
{
  	constructor(public dialogRef: MatDialogRef<CardModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Card) { }

	public canChange: boolean = false;

	public close(): void
	{
		this.dialogRef.close();
	}
}
