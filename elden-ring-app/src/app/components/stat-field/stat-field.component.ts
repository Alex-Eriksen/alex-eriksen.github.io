import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Stat
{
  name: string;
}

@Component({
  selector: 'stat-field',
  templateUrl: './stat-field.component.html',
  styleUrls: [ './stat-field.component.css' ]
})
export class StatFieldComponent
{
  constructor() { }

  @Output() onStatChange: EventEmitter<string> = new EventEmitter();

  statChanged(newName: string)
  {
    this.onStatChange.emit(newName);
  }

  statControl = new FormControl();
  statGroup: Stat[] = [
    { name: "Strength" },
    { name: "Dexterity" },
    { name: "Endurance" },
    { name: "Vigor" },
    { name: "Intelligence" },
    { name: "Faith" },
    { name: "Arcane" },
    { name: "Mind" }
  ]

}
