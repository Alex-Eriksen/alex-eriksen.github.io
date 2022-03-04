import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

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

  public onSubmit(form: NgForm): void
  {
    console.log(form.value);
  }

  public addStatField(): void
  {
    this.statFields.push(1);
  }

  public removeStatField(): void
  {
    this.statFields.pop();
  }

  public addScaleField(): void
  {
    this.scaleFields.push(1);
  }

  public removeScaleField(): void
  {
    this.scaleFields.pop();
  }

  public optionSelected(event: MatOptionSelectionChange): any
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
