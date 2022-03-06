import { Component, Input } from '@angular/core';

@Component({
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent
{
  constructor() { }

  @Input() valueName!: string;
  @Input() type!: string;
  @Input() isRequired?: boolean;
  @Input() flex?: number;
}
