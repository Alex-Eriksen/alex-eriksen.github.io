import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Stat } from '../stat-field/stat-field.component';

interface SubCategory
{
  name: string;
}

interface Category
{
  name: string;
  subcategory: SubCategory[];
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent
{
  constructor() { }

  selected: string = "";
  statFields: Array<number> = [];
  scaleFields: Array<number> = [];

  addStatField()
  {
    this.statFields.push(1);
  }

  removeStatField()
  {
    this.statFields.pop();
  }

  addScaleField()
  {
    this.scaleFields.push(1);
  }

  removeScaleField()
  {
    this.scaleFields.pop();
  }

  optionSelected(event: MatOptionSelectionChange): any
  {
    if (event.isUserInput)
    {
      this.selected = event.source.group.label;
    }
  }

  equipmentControl = new FormControl();
  equipmentGroups: Category[] = [
    {
      name: "Armor",
      subcategory: [
        { name: "Helmet" },
        { name: "Chest" },
        { name: "Arms" },
        { name: "Legs" }
      ]
    },
    {
      name: "Weapon",
      subcategory: [
        { name: "Dagger" },
        { name: "Sword" },
        { name: "Whip" },
        { name: "Katana" },
        { name: "Bow" },
        { name: "Crossbow" },
      ]
    }
  ]
}
