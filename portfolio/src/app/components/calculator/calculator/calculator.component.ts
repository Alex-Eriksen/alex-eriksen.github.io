import { Component, OnInit } from '@angular/core';
import { Math } from '../../main/helpers/math';
import { Equation, Operator } from '../interfaces';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit
{
	constructor() { }

	public equation: string = "0";

	private operators: string[] = ["+", "=", "*", "/", "-"];

  	ngOnInit(): void {}

	public addToEquation(part: string): void
	{
		if (part == "c")
		{
			this.equation = "0";
			return;
		}

		if (this.equation == "0" && part != "," && !this.operators.includes(part))
		{
			this.equation = part;
		}
		else if(this.operators.includes(part))
		{
			if (part == "=")
			{
				this.equation += ` = ${this.calculateEquation()}`;
			}
			else
			{
				this.equation += ` ${part} `;
			}
		}
		else
		{
			this.equation += part;
		}
	}

	private predicate = (a: Operator, b: Operator) => {
		const map: { [ key: string ]: any; } = {};
		map[Operator.Divide] = 1;
		map[Operator.Multiply] = 2;
		map[Operator.Subtract] = 3;
		map[Operator.Add] = 3;

		if (map[a] < map[b]) {
			return -1;
		}

		if (map[a] > map[b]) {
			return 1;
		}

		return 0;
	}

	private calculateEquation(): number
	{
		const rawEquation: any[] = this.equation.split(' ');
		const equationQueue: Equation[] = [];
		let result: number = 0;

		for (let i = 0; i < rawEquation.length; i++)
		{
			if (this.operators.includes(rawEquation[ i ]))
			{
				const newEquation: Equation = {
					numA: Number(rawEquation[ i - 1 ]),
					numB: Number(rawEquation[ i + 1 ]),
					operator: rawEquation[ i ]
				};
				equationQueue.push(newEquation);
			}
		}

		equationQueue.sort((a, b) => this.predicate(a.operator, b.operator));

		for (let i = 0; i < equationQueue.length; i++)
		{
			const isLast: boolean = (i == equationQueue.length - 1);
			const equation: Equation = equationQueue[ i ];
			let outcome: number = 0;

			switch (equationQueue[ i ].operator)
			{
				case Operator.Multiply:
					outcome = Math.Mul(equation.numA, equation.numB);
					console.log(`Run: ${i} - Outcome: ${outcome} - Equation: `, equation);
					if (!isLast)
					{
						equationQueue[ i + 1 ].numA = outcome;
					}
					equationQueue.splice(i, 1);
					break;

				case Operator.Divide:
					break;

				case Operator.Add:
					outcome = Math.Add(equation.numA, equation.numB);
					console.log(`Run: ${i} - Outcome: ${outcome} - Equation: `, equation);
					if (!isLast)
					{
						equationQueue[ i + 1 ].numA = outcome;
					}
					equationQueue.splice(i, 1);
					break;

					case Operator.Subtract:
						break;
			}
			result += outcome;
		}

		return result;
	}
}
