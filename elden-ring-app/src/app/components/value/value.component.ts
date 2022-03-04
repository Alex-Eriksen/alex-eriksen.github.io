import { Component, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

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
  @Output() input!: NgModel;
}
