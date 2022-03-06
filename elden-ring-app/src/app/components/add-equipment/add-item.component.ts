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

interface StatField
{
  stat: string;
  amount: number;
}

export interface ScaleField
{
  stat: string;
  rank: string;
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
  statFields: Array<StatField> = [];
  scaleFields: Array<ScaleField> = [];

  public onSubmit(form: NgForm): void
  {
    console.log(form.value);
  }

  public addStatField(): void
  {
    this.statFields.push({stat: "empty_stat_" + this.statFields.length, amount: 0});
  }

  public removeStatField(): void
  {
    this.statFields.pop();
  }

  public updateStatField(statField: StatField, newStat: string): void
  {
    this.statFields.find((e) => e.stat == statField.stat)!.stat = newStat;
  }

  public addScaleField(): void
  {
    this.scaleFields.push({stat: "empty_stat_" + this.scaleFields.length, rank: "empty_rank"});
  }

  public removeScaleField(): void
  {
    this.scaleFields.pop();
  }

  public updateScaleField(scaleField: ScaleField, newScaleField: ScaleField): void
  {
    const local_scale_field = this.scaleFields.find((e) => e.stat == scaleField.stat);

    local_scale_field!.stat = newScaleField.stat;
    local_scale_field!.rank = newScaleField.rank;
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
