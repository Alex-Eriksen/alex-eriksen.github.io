import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, NgForm } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { connectFirestoreEmulator, doc, getDocs, setDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

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
export class AddItemComponent implements OnInit
{
  constructor(private firestore: Firestore) { }

  ngOnInit(): void
  {
    if (environment.emulator)
    {
      connectFirestoreEmulator(this.firestore, "localhost", 8081);
      console.log("Connected to Emulator.");
    }
    this.equipmentControl = new FormControl();
  }

  equipmentControl!: FormControl;
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

  selected: string = "";
  statFields: Array<StatField> = [];
  scaleFields: Array<ScaleField> = [];

  public async onSubmit(form: NgForm): Promise<void>
  {
    if (!form.valid)
    {
      console.log(form.errors);
      return;
    }

    console.warn("On Submit Ran with no errors found.");

    await setDoc(doc(this.firestore, "Equipment", form.control.get('name')!.value), form.value);
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

    if (newScaleField.rank && newScaleField.stat)
    {
      local_scale_field!.stat = newScaleField.stat;
      local_scale_field!.rank = newScaleField.rank;
    }

    if(local_scale_field?.stat != scaleField.stat)
    {
      local_scale_field!.stat = newScaleField.stat;
    }
    if (newScaleField.rank)
    {
      local_scale_field!.rank = newScaleField.rank;
    }
  }

  public optionSelected(event: MatOptionSelectionChange): any
  {
    if (event.isUserInput)
    {
      this.selected = event.source.group.label;
    }
  }


}
