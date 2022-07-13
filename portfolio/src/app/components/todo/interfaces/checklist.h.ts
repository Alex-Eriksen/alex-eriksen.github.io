import { KeyValue } from "@angular/common";
import { Item } from "./item.h";

export interface Checklist extends Item
{
	items: ChecklistItem[];
}

export interface ChecklistItem extends Item
{
	status: boolean;
}
