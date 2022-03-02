import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
export class AddItemComponent implements OnInit {

  constructor() { }

  selected: string | undefined;

  ngOnInit(): void
  {

  }

  changeClient(selected: string): void
  {
    this.selected = selected;
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
