import { Component, HostBinding, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  @HostBinding('attr.name')
  @Input() name!: string;

  @Input() valueName!: string;
  @Input() type!: string;
  @Input() flex?: number;
}
