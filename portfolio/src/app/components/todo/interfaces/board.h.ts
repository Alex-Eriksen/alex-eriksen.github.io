import { KeyValue } from "@angular/common";
import { Item } from "./item.h";
import { List } from "./list.h";

export interface Board extends Item
{
	lists: KeyValue<string, List>[];
}
