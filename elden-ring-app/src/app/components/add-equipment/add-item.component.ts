import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';
import { connectFirestoreEmulator, doc, getDocs, setDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';
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
  	constructor(private firestore: Firestore, private router: Router) {}

  	controlled!: boolean | null;
  	isInvalid!: boolean | null;

  	public static OnItemAdded: Subject<string> = new Subject<string>();

  	ngOnInit(): void
  	{
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
  	submitted: boolean = false;

  	public onValidate(form: NgForm): void
  	{
  	  	this.controlled = form.valid;
  	  	this.isInvalid = !form.valid;
  	}

	public async onSubmit(form: NgForm): Promise<void>
	{
		return await new Promise( async(resolve) =>
		{
			Object.keys(form.controls).forEach(key =>
			{
				if (form.controls[ key ].value instanceof Object)
				{
				Object.keys(form.controls[ key ].value).forEach(nestedKeys =>
				{
					if (form.controls[ key ].value[nestedKeys] === '')
					{
						form.controls[ key ].value[nestedKeys] = "0";
					}
				});
				}
				if (form.controls[ key ].value === '')
				{
					form.controls[ key ].setValue("0");
				}
			});

			form.control.addControl('equipmentType', this.equipmentControl);
			await setDoc(
				doc(
					this.firestore,
					"Equipment",
					this.selected,
					form.control.get('equipmentType')!.value,
					form.control.get('equipmentName')!.value
				),
				form.value
			)
			.then(() =>
			{
				this.ItemAdded(form.control.get('equipmentName')!.value);
				resolve();
			});
		});
  	}

	private ItemAdded(equipmentName: string): void
	{
		AddItemComponent.OnItemAdded.next(equipmentName);
		this.router.navigate(['/']);
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
