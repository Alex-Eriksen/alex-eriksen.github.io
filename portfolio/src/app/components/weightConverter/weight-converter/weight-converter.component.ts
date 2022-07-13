import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeightTable, WeightType } from '../interfaces';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['./weight-converter.component.css']
})
export class WeightConverterComponent implements OnInit
{
  	constructor() { }

	public weightTable: WeightTable = { from: "kg", amount: 0 };
	public output: KeyValue<string, number>[] = [
		{ key: "kg", value: 0 },
		{ key: "g", value: 0 },
		{ key: "lbs", value: 0 },
		{ key: "oz", value: 0 },
		{ key: "st", value: 0 }
	];
	public ratio: KeyValue<string, number>[] = [
		{ key: "kg", value: 1 },
		{ key: "g", value: 1000 },
		{ key: "lbs", value: 0.45359237 },
		{ key: "oz", value: 0.0283495231 },
		{ key: "st", value: 6.35029318 }
	];

	ngOnInit(): void { }

	public select(value: string): void
	{
		this.weightTable.from = value;
		this.convert();
	}

	public amount(value: string): void
	{
		try
		{
			const val: number = Number(value);
			this.weightTable.amount = val;
			this.convert();
		}
		catch {}
	}

	private convert(): void
	{
		let amount: number = 0;
		amount = this.weightTable.amount;
		if (this.weightTable.from != "kg")
		{
			amount = this.weightTable.amount / this.ratio.find(x => x.key == this.weightTable.from)!.value;
		}

		for (const key of this.output.keys())
		{
			this.output[ key ].value = amount * this.ratio[ key ].value;
		}
	}
}
