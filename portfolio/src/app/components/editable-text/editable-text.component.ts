import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent
{
  	constructor() { }

	public canChange: boolean = false;

	@Input() data!: any;
}
