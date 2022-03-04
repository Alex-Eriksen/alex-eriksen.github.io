import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent
{
  constructor() { }

  @Input() name!: string;
  @Input() type!: string;
  @Input() isRequired?: boolean;
  @Input() flex?: number;

}
