import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent
{
  constructor() { }

  @HostBinding('attr.required')
  @Input() required!: boolean;

  @Input() valueName!: string;
  @Input() type!: string;
  @Input() flex?: number;
}
