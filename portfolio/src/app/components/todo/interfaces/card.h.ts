import { Item } from "./item.h";
import { List } from "./list.h";

export interface Card extends Item
{
	list: List;
	description: string;
	creationDate: number;
}
