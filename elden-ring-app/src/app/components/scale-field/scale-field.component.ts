import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Stat } from '../stat-field/stat-field.component';

export interface Rank
{
  rank: string;
}

@Component({
  selector: 'scale-field',
  templateUrl: './scale-field.component.html',
  styleUrls: ['./scale-field.component.css']
})
export class ScaleFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  rankControl = new FormControl();
  rankGroup: Rank[] = [
    { rank: "A" },
    { rank: "B" },
    { rank: "C" },
    { rank: "D" },
    { rank: "E" }
  ]
}
